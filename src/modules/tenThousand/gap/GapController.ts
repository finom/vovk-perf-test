import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gap")
export default class GapController {
  @operation({
    summary: "Get Gap",
  })
  @get()
  static getGap = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gap",
  })
  @post("{id}")
  static createGap = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
