import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fq")
export default class FqController {
  @operation({
    summary: "Get Fq",
  })
  @get()
  static getFq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fq",
  })
  @post("{id}")
  static createFq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
