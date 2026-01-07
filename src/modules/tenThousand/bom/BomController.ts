import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bom")
export default class BomController {
  @operation({
    summary: "Get Bom",
  })
  @get()
  static getBom = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bom",
  })
  @post("{id}")
  static createBom = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
