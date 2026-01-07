import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsp")
export default class DspController {
  @operation({
    summary: "Get Dsp",
  })
  @get()
  static getDsp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dsp",
  })
  @post("{id}")
  static createDsp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
