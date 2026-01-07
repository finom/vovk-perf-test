import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpn")
export default class KpnController {
  @operation({
    summary: "Get Kpn",
  })
  @get()
  static getKpn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kpn",
  })
  @post("{id}")
  static createKpn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
