import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqh")
export default class FqhController {
  @operation({
    summary: "Get Fqh",
  })
  @get()
  static getFqh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fqh",
  })
  @post("{id}")
  static createFqh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
