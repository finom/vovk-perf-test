import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpn")
export default class MpnController {
  @operation({
    summary: "Get Mpn",
  })
  @get()
  static getMpn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpn",
  })
  @post("{id}")
  static createMpn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
