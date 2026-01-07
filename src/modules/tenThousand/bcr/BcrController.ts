import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcr")
export default class BcrController {
  @operation({
    summary: "Get Bcr",
  })
  @get()
  static getBcr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bcr",
  })
  @post("{id}")
  static createBcr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
