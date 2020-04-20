import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTheme } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';

import {
  Card,
  CardHeader,
  CardContent,
  Button,
  Paper,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';


const ListDependencies = (props) => {
  const { rows = [], onDone } = props;

  const theme = useTheme();
  const { t } = useTranslation();

  const [selected, setSelected] = useState([]);

  const handleChange = (event, row) => {
    if (event.target.checked) {
      setSelected([...selected, row]);
    } else {
      selected.splice(selected.indexOf(row), 1);
      setSelected([...selected]);
    }
  };

  const CardContainer = styled(Card)`
    margin-top: ${theme.spacing(3)}px;
  `;

  const CardContentDeps = styled(CardContent)`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  `;

  const RowPaper = styled(Paper)`
    margin: ${theme.spacing(0.5)}px;
    padding: ${theme.spacing(0.5)}px;
    border: 1px solid ${theme.palette.divider};
  `;

  return (
    <CardContainer>
      <CardHeader title={t('listDependencies.title')} />
      <CardContentDeps>
        {rows.map((row) => (
          <RowPaper key={row} square elevation={0}>
            <FormControlLabel
              control={(
                <Checkbox
                  checked={selected.indexOf(row) !== -1}
                  color="primary"
                  onClick={(event) => handleChange(event, row)}
                />
          )}
              label={row}
            />
          </RowPaper>
        ))}
        <Button
          variant="contained"
          color="primary"
          onClick={() => onDone(selected)}
        >
          {t('listDependencies.btnDone')}
        </Button>
      </CardContentDeps>
    </CardContainer>
  );
};

ListDependencies.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  onDone: PropTypes.func.isRequired,
};

export default ListDependencies;
