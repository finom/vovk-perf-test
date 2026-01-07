import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpn")
export default class CpnController {
  @operation({
    summary: "Get Cpn",
  })
  @get()
  static getCpn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cpn",
  })
  @post("{id}")
  static createCpn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
