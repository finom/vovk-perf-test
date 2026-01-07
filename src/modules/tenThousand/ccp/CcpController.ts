import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccp")
export default class CcpController {
  @operation({
    summary: "Get Ccp",
  })
  @get()
  static getCcp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ccp",
  })
  @post("{id}")
  static createCcp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
