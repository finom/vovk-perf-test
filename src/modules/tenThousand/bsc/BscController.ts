import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsc")
export default class BscController {
  @operation({
    summary: "Get Bsc",
  })
  @get()
  static getBsc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bsc",
  })
  @post("{id}")
  static createBsc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
