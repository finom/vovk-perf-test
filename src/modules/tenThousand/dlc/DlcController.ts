import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlc")
export default class DlcController {
  @operation({
    summary: "Get Dlc",
  })
  @get()
  static getDlc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dlc",
  })
  @post("{id}")
  static createDlc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
