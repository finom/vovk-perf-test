import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyh")
export default class KyhController {
  @operation({
    summary: "Get Kyh",
  })
  @get()
  static getKyh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kyh",
  })
  @post("{id}")
  static createKyh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
