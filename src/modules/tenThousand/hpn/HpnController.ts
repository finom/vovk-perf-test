import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpn")
export default class HpnController {
  @operation({
    summary: "Get Hpn",
  })
  @get()
  static getHpn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hpn",
  })
  @post("{id}")
  static createHpn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
