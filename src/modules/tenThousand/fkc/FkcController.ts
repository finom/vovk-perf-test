import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkc")
export default class FkcController {
  @operation({
    summary: "Get Fkc",
  })
  @get()
  static getFkc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fkc",
  })
  @post("{id}")
  static createFkc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
