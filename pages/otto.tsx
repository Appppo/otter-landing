import { makeStyles } from '@material-ui/core'
import OttoBanner from 'src/components/Otto/OttoBanner'
import OttoWhitelistSection from 'src/components/Otto/OttoWhitelistSection'
import OttoGetSection from 'src/components/Otto/OttoGetSection'
import OttoTypeSection from 'src/components/Otto/OttoTypeSection'
import OttoComponentSection from 'src/components/Otto/OttoComponentSection'
import OttoFactorySection from 'src/components/Otto/OttoFactorySection'
import OtterRiverSection from 'src/components/Otto/OttoRiverSection'
import OttoUsageSection from 'src/components/Otto/OtterUsageSection'
import OttoRoadMapSection from 'src/components/Otto/OtterRoadmapSection'
import OttoCountdownSection from 'src/components/Otto/OttoCountdownSection'
import Head from 'next/head'

const useStyles = makeStyles((theme) => ({
  view: {
    backgroundColor: theme.palette.mode.white,
    color: theme.palette.mode.otterDark,
  },
}))

const OttoPage = () => {
  const classes = useStyles()
  return (
    <div className={classes.view}>
      <Head>
        <title>Otto | The Otter Kingdom&apos;s newest NFT innovation</title>
        <meta property="og:title" content="Otto | The First Citizens of the Otter Kingdom" />
        <meta
          property="og:description"
          content="Ottos are unique and randomly generated 2D NFT Social Avatars created to enhance your online experience. Some appear normal. Some look crazy. Some are just damn cool!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={process.env.NEXT_PUBLIC_URL + '/otto-og.jpg'} />
      </Head>
      <OttoBanner />
      <OttoWhitelistSection />
      <OttoGetSection />
      <OttoTypeSection />
      <OttoComponentSection />
      <OttoFactorySection />
      <OtterRiverSection />
      <OttoUsageSection />
      <OttoRoadMapSection />
      <OttoCountdownSection />
    </div>
  )
}
export default OttoPage
