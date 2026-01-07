import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqo")
export default class FqoController {
  @operation({
    summary: "Get Fqo",
  })
  @get()
  static getFqo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fqo",
  })
  @post("{id}")
  static createFqo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
