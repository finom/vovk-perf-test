import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqy")
export default class FqyController {
  @operation({
    summary: "Get Fqy",
  })
  @get()
  static getFqy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fqy",
  })
  @post("{id}")
  static createFqy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
