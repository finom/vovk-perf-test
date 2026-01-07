import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bai")
export default class BaiController {
  @operation({
    summary: "Get Bai",
  })
  @get()
  static getBai = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bai",
  })
  @post("{id}")
  static createBai = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
