import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibc")
export default class IbcController {
  @operation({
    summary: "Get Ibc",
  })
  @get()
  static getIbc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ibc",
  })
  @post("{id}")
  static createIbc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
