import PropTypes from 'prop-types';
import React from 'react';
import {View} from 'react-native';
import Icon from '@components/Icon';
import * as Expensicons from '@components/Icon/Expensicons';
import Text from '@components/Text';
import useTheme from '@styles/themes/useTheme';
import useThemeStyles from '@styles/useThemeStyles';

const propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

function RedDotCardSection({title, description}) {
    const theme = useTheme();
    const styles = useThemeStyles();

    return (
        <View style={[styles.p5, styles.flexRow, styles.alignItemsStart]}>
            <View style={styles.offlineFeedback.errorDot}>
                <Icon
                    src={Expensicons.DotIndicator}
                    fill={theme.danger}
                />
            </View>
            <View style={[styles.flexRow, styles.flexShrink1]}>
                <View style={styles.flexShrink1}>
                    <Text style={[styles.walletRedDotSectionTitle, styles.mb1]}>{title}</Text>
                    <Text styles={styles.walletRedDotSectionText}>{description}</Text>
                </View>
            </View>
        </View>
    );
}

RedDotCardSection.propTypes = propTypes;
RedDotCardSection.displayName = 'RedDotCardSection';

export default RedDotCardSection;
