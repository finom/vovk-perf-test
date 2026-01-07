import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqm")
export default class FqmController {
  @operation({
    summary: "Get Fqm",
  })
  @get()
  static getFqm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fqm",
  })
  @post("{id}")
  static createFqm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
