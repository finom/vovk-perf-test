import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlg")
export default class MlgController {
  @operation({
    summary: "Get Mlg",
  })
  @get()
  static getMlg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mlg",
  })
  @post("{id}")
  static createMlg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
