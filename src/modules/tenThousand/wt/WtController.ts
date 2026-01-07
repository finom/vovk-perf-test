import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wt")
export default class WtController {
  @operation({
    summary: "Get Wt",
  })
  @get()
  static getWt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Wt",
  })
  @post("{id}")
  static createWt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
