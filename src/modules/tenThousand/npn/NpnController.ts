import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npn")
export default class NpnController {
  @operation({
    summary: "Get Npn",
  })
  @get()
  static getNpn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Npn",
  })
  @post("{id}")
  static createNpn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
