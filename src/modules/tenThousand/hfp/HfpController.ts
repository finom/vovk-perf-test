import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfp")
export default class HfpController {
  @operation({
    summary: "Get Hfp",
  })
  @get()
  static getHfp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hfp",
  })
  @post("{id}")
  static createHfp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
