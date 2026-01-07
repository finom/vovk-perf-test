import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnp")
export default class NnpController {
  @operation({
    summary: "Get Nnp",
  })
  @get()
  static getNnp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nnp",
  })
  @post("{id}")
  static createNnp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
