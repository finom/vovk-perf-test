import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlg")
export default class JlgController {
  @operation({
    summary: "Get Jlg",
  })
  @get()
  static getJlg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jlg",
  })
  @post("{id}")
  static createJlg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
