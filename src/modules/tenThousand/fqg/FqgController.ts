import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqg")
export default class FqgController {
  @operation({
    summary: "Get Fqg",
  })
  @get()
  static getFqg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fqg",
  })
  @post("{id}")
  static createFqg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
