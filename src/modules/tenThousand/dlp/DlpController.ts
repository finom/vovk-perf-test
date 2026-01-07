import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlp")
export default class DlpController {
  @operation({
    summary: "Get Dlp",
  })
  @get()
  static getDlp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dlp",
  })
  @post("{id}")
  static createDlp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
