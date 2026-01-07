import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amp")
export default class AmpController {
  @operation({
    summary: "Get Amp",
  })
  @get()
  static getAmp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Amp",
  })
  @post("{id}")
  static createAmp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
