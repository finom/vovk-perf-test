import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpn")
export default class FpnController {
  @operation({
    summary: "Get Fpn",
  })
  @get()
  static getFpn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpn",
  })
  @post("{id}")
  static createFpn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
