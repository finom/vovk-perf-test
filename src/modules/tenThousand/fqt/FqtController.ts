import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqt")
export default class FqtController {
  @operation({
    summary: "Get Fqt",
  })
  @get()
  static getFqt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fqt",
  })
  @post("{id}")
  static createFqt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
