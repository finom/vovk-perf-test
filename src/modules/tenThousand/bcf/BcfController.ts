import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcf")
export default class BcfController {
  @operation({
    summary: "Get Bcf",
  })
  @get()
  static getBcf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bcf",
  })
  @post("{id}")
  static createBcf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
