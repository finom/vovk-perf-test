import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkn")
export default class BknController {
  @operation({
    summary: "Get Bkn",
  })
  @get()
  static getBkn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bkn",
  })
  @post("{id}")
  static createBkn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
