import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqc")
export default class FqcController {
  @operation({
    summary: "Get Fqc",
  })
  @get()
  static getFqc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fqc",
  })
  @post("{id}")
  static createFqc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
