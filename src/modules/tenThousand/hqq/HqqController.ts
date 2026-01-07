import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqq")
export default class HqqController {
  @operation({
    summary: "Get Hqq",
  })
  @get()
  static getHqq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqq",
  })
  @post("{id}")
  static createHqq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
