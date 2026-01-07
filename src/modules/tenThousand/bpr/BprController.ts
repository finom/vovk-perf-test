import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpr")
export default class BprController {
  @operation({
    summary: "Get Bpr",
  })
  @get()
  static getBpr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bpr",
  })
  @post("{id}")
  static createBpr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
