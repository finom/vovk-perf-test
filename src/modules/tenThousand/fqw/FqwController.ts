import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqw")
export default class FqwController {
  @operation({
    summary: "Get Fqw",
  })
  @get()
  static getFqw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fqw",
  })
  @post("{id}")
  static createFqw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
