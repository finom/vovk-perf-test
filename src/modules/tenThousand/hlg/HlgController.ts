import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlg")
export default class HlgController {
  @operation({
    summary: "Get Hlg",
  })
  @get()
  static getHlg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hlg",
  })
  @post("{id}")
  static createHlg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
