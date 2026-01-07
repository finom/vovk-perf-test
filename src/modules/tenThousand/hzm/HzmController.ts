import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzm")
export default class HzmController {
  @operation({
    summary: "Get Hzm",
  })
  @get()
  static getHzm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hzm",
  })
  @post("{id}")
  static createHzm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
