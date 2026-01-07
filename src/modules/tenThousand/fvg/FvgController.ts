import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvg")
export default class FvgController {
  @operation({
    summary: "Get Fvg",
  })
  @get()
  static getFvg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fvg",
  })
  @post("{id}")
  static createFvg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
