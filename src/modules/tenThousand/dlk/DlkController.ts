import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlk")
export default class DlkController {
  @operation({
    summary: "Get Dlk",
  })
  @get()
  static getDlk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dlk",
  })
  @post("{id}")
  static createDlk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
