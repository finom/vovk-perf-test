import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtu")
export default class MtuController {
  @operation({
    summary: "Get Mtu",
  })
  @get()
  static getMtu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mtu",
  })
  @post("{id}")
  static createMtu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
