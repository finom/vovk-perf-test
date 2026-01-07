import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfm")
export default class HfmController {
  @operation({
    summary: "Get Hfm",
  })
  @get()
  static getHfm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hfm",
  })
  @post("{id}")
  static createHfm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
