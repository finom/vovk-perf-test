import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epn")
export default class EpnController {
  @operation({
    summary: "Get Epn",
  })
  @get()
  static getEpn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Epn",
  })
  @post("{id}")
  static createEpn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
