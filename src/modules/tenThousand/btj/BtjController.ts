import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btj")
export default class BtjController {
  @operation({
    summary: "Get Btj",
  })
  @get()
  static getBtj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Btj",
  })
  @post("{id}")
  static createBtj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
