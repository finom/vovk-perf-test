import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpn")
export default class DpnController {
  @operation({
    summary: "Get Dpn",
  })
  @get()
  static getDpn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dpn",
  })
  @post("{id}")
  static createDpn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
