import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  scrollView: {
    width: '100%',
    height: '100%',
  },
  logopng: {
    marginLeft: 50,
    marginTop: 50,
  },
  topcontainer: {
    width: '100%',
    height: 550,
    overflow: 'hidden',
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fcfcfd',
  },
  innercontainer: {
    width: 550,
  },
  headerpng: {
    width: 500,
    height: 333,
  },
  textA: {
    fontSize: 55,
    fontFamily: 'Jost-Light',
    // marginLeft: 50,
    width: 550,
    color: '#566c30',
    // backgroundColor: '#ff0000',
  },
  textB: {
    fontSize: 50,
    fontFamily: 'Jost-SemiBold',
    // left: 50,
    // marginLeft: 50,
    marginTop: 20,
    width: 550,
    color: '#566c30',
    // backgroundColor: '#ff0000',
  },
  textC: {
    fontSize: 18,
    fontFamily: 'Jost-SemiBold',
    // left: 50,
    // marginLeft: 50,
    marginTop: 20,
    width: 550,
    color: '#000000',
    // backgroundColor: '#ff0000',
  },
  gradcontainer: {
    position: 'absolute',
    left: 0,
    top: 140,
    width: '100%',
    height: 50,
    backgroundColor: '#ffff00',
  },
  topgradient: {
    ...StyleSheet.absoluteFillObject,
  },
});
