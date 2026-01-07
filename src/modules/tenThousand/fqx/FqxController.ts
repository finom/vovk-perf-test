import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqx")
export default class FqxController {
  @operation({
    summary: "Get Fqx",
  })
  @get()
  static getFqx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fqx",
  })
  @post("{id}")
  static createFqx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
