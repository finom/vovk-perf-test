import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqn")
export default class FqnController {
  @operation({
    summary: "Get Fqn",
  })
  @get()
  static getFqn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fqn",
  })
  @post("{id}")
  static createFqn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
