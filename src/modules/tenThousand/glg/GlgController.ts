import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glg")
export default class GlgController {
  @operation({
    summary: "Get Glg",
  })
  @get()
  static getGlg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Glg",
  })
  @post("{id}")
  static createGlg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
