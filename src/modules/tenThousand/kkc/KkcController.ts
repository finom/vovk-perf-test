import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkc")
export default class KkcController {
  @operation({
    summary: "Get Kkc",
  })
  @get()
  static getKkc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kkc",
  })
  @post("{id}")
  static createKkc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
