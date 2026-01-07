import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqj")
export default class FqjController {
  @operation({
    summary: "Get Fqj",
  })
  @get()
  static getFqj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fqj",
  })
  @post("{id}")
  static createFqj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
