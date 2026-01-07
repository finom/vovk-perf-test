import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fig")
export default class FigController {
  @operation({
    summary: "Get Fig",
  })
  @get()
  static getFig = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fig",
  })
  @post("{id}")
  static createFig = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
