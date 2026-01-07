import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqv")
export default class FqvController {
  @operation({
    summary: "Get Fqv",
  })
  @get()
  static getFqv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fqv",
  })
  @post("{id}")
  static createFqv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
