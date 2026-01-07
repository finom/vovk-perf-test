import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dl")
export default class DlController {
  @operation({
    summary: "Get Dl",
  })
  @get()
  static getDl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dl",
  })
  @post("{id}")
  static createDl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
