import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgw")
export default class HgwController {
  @operation({
    summary: "Get Hgw",
  })
  @get()
  static getHgw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hgw",
  })
  @post("{id}")
  static createHgw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
