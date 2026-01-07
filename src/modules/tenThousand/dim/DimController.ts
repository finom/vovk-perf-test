import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dim")
export default class DimController {
  @operation({
    summary: "Get Dim",
  })
  @get()
  static getDim = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dim",
  })
  @post("{id}")
  static createDim = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
