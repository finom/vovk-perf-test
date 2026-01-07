import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqb")
export default class FqbController {
  @operation({
    summary: "Get Fqb",
  })
  @get()
  static getFqb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fqb",
  })
  @post("{id}")
  static createFqb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
