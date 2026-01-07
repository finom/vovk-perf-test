import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqq")
export default class CqqController {
  @operation({
    summary: "Get Cqq",
  })
  @get()
  static getCqq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqq",
  })
  @post("{id}")
  static createCqq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
