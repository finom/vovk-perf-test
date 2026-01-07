import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcp")
export default class KcpController {
  @operation({
    summary: "Get Kcp",
  })
  @get()
  static getKcp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kcp",
  })
  @post("{id}")
  static createKcp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
