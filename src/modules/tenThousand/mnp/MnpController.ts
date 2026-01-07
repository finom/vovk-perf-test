import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnp")
export default class MnpController {
  @operation({
    summary: "Get Mnp",
  })
  @get()
  static getMnp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mnp",
  })
  @post("{id}")
  static createMnp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
