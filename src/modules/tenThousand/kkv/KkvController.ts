import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkv")
export default class KkvController {
  @operation({
    summary: "Get Kkv",
  })
  @get()
  static getKkv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kkv",
  })
  @post("{id}")
  static createKkv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
