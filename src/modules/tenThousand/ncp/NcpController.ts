import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncp")
export default class NcpController {
  @operation({
    summary: "Get Ncp",
  })
  @get()
  static getNcp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ncp",
  })
  @post("{id}")
  static createNcp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
