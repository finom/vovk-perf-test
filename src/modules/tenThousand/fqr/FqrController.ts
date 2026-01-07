import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqr")
export default class FqrController {
  @operation({
    summary: "Get Fqr",
  })
  @get()
  static getFqr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fqr",
  })
  @post("{id}")
  static createFqr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
