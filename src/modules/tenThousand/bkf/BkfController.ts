import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkf")
export default class BkfController {
  @operation({
    summary: "Get Bkf",
  })
  @get()
  static getBkf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bkf",
  })
  @post("{id}")
  static createBkf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
