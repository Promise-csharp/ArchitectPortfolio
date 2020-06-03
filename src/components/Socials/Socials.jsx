import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FeatureWidget from '@mui-treasury/components/widget/FeatureWidget';
import { useFullBorderedGridStyles } from '@mui-treasury/styles/grid/fullBordered';

const socials = [
    {
      icon: ['fab', 'instagram'],
      title: 'Instagram',
      content: 'Follow my studio Instagram page',
      children: (
        <Button 
          variant="outlined"
          target={'_blank'} 
          rel={'noopener'} 
          href={'https://instagram.com/studio.rachael'} 
          color={'default'}>
          Follow My Instagram
        </Button>
      ),
    },
    {
      icon: ['fab', 'tumblr'],
      title: 'Tumblr',
      content: "I also share project updates through my Tumblr",
      children: (
        <Button
          variant="outlined"
          target={'_blank'}
          rel={'noopener'}
          href={'https://rachaelboudreau.tumblr.com'}
          color={'default'}
        >
          Stay Posted
        </Button>
      ),
    },
    {
      icon: ['fab', 'telegram-plane'],
      title: 'Email',
      content: 'Drop me a line here!',
      children: (
        <Button
          variant="outlined"
          target={'_blank'}
          rel={'noopener'}
          href={'mailto:boudreaurachael123@gmail.com'}
          color={'default'}
        >
          Message me
        </Button>
      ),
    },
  ];
  
  const useTintPrimaryWidgetStyles = makeStyles(() => ({
    iconWrapper: {
      backgroundColor: '#ebf3f6',
    },
    icon: {
      color: '#90caf9',
    },
  }));

  export default function Socials() {
    const widgetStyles = useTintPrimaryWidgetStyles();
    const socialGridStyles = useFullBorderedGridStyles({
      colWidth: { xs: 12, sm: 4 },
    });
    
    return (
        <div>
            <Container>
                <Box py={{ xs: '2rem', sm: '3.5rem' }}>
                    <Grid container classes={socialGridStyles}>
                        {socials.map(({ icon, title, content, children }) => (
                        <Grid
                            classes={socialGridStyles}
                            item
                            key={title}
                            xs={12}
                            sm={6}
                            md={4}
                        >
                            <FeatureWidget
                            classes={widgetStyles}
                            title={title}
                            content={content}
                            renderIcon={({ className }) => (
                                <FontAwesomeIcon icon={icon} className={className} />
                            )}
                            >
                            <Box textAlign={'center'}>{children}</Box>
                            </FeatureWidget>
                        </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </div>
    )
}