import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcp")
export default class BcpController {
  @operation({
    summary: "Get Bcp",
  })
  @get()
  static getBcp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bcp",
  })
  @post("{id}")
  static createBcp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
