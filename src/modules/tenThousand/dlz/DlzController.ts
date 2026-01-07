import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlz")
export default class DlzController {
  @operation({
    summary: "Get Dlz",
  })
  @get()
  static getDlz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dlz",
  })
  @post("{id}")
  static createDlz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
