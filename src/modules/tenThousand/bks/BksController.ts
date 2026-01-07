import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bks")
export default class BksController {
  @operation({
    summary: "Get Bks",
  })
  @get()
  static getBks = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bks",
  })
  @post("{id}")
  static createBks = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
