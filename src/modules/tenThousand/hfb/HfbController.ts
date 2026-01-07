import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfb")
export default class HfbController {
  @operation({
    summary: "Get Hfb",
  })
  @get()
  static getHfb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hfb",
  })
  @post("{id}")
  static createHfb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
