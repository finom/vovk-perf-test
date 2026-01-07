import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpn")
export default class LpnController {
  @operation({
    summary: "Get Lpn",
  })
  @get()
  static getLpn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lpn",
  })
  @post("{id}")
  static createLpn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
