import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnp")
export default class LnpController {
  @operation({
    summary: "Get Lnp",
  })
  @get()
  static getLnp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lnp",
  })
  @post("{id}")
  static createLnp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
