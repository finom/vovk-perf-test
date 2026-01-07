import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvg")
export default class GvgController {
  @operation({
    summary: "Get Gvg",
  })
  @get()
  static getGvg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gvg",
  })
  @post("{id}")
  static createGvg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
