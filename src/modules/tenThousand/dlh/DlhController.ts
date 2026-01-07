import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlh")
export default class DlhController {
  @operation({
    summary: "Get Dlh",
  })
  @get()
  static getDlh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dlh",
  })
  @post("{id}")
  static createDlh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
