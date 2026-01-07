import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkn")
export default class KknController {
  @operation({
    summary: "Get Kkn",
  })
  @get()
  static getKkn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kkn",
  })
  @post("{id}")
  static createKkn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
