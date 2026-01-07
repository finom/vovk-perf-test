import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlf")
export default class DlfController {
  @operation({
    summary: "Get Dlf",
  })
  @get()
  static getDlf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dlf",
  })
  @post("{id}")
  static createDlf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
