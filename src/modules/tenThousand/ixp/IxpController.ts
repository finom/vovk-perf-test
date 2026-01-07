import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixp")
export default class IxpController {
  @operation({
    summary: "Get Ixp",
  })
  @get()
  static getIxp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ixp",
  })
  @post("{id}")
  static createIxp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
