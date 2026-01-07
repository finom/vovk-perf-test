import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqa")
export default class FqaController {
  @operation({
    summary: "Get Fqa",
  })
  @get()
  static getFqa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fqa",
  })
  @post("{id}")
  static createFqa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
