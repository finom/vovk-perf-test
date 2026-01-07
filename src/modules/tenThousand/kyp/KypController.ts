import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyp")
export default class KypController {
  @operation({
    summary: "Get Kyp",
  })
  @get()
  static getKyp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kyp",
  })
  @post("{id}")
  static createKyp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
