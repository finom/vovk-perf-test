import { procedure, prefix, get, post, operation } from "vovk";

@prefix("erc")
export default class ErcController {
  @operation({
    summary: "Get Erc",
  })
  @get()
  static getErc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Erc",
  })
  @post("{id}")
  static createErc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
