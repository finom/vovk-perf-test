import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnp")
export default class BnpController {
  @operation({
    summary: "Get Bnp",
  })
  @get()
  static getBnp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bnp",
  })
  @post("{id}")
  static createBnp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
