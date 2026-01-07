import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxa")
export default class DxaController {
  @operation({
    summary: "Get Dxa",
  })
  @get()
  static getDxa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxa",
  })
  @post("{id}")
  static createDxa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
