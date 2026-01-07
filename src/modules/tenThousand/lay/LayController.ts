import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lay")
export default class LayController {
  @operation({
    summary: "Get Lay",
  })
  @get()
  static getLay = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lay",
  })
  @post("{id}")
  static createLay = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
