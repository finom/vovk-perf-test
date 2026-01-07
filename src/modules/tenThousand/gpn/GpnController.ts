import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpn")
export default class GpnController {
  @operation({
    summary: "Get Gpn",
  })
  @get()
  static getGpn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gpn",
  })
  @post("{id}")
  static createGpn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
