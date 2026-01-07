import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dga")
export default class DgaController {
  @operation({
    summary: "Get Dga",
  })
  @get()
  static getDga = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dga",
  })
  @post("{id}")
  static createDga = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
