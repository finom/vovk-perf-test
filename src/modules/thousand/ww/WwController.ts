import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ww")
export default class WwController {
  @operation({
    summary: "Get Ww",
  })
  @get()
  static getWw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ww",
  })
  @post("{id}")
  static createWw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
