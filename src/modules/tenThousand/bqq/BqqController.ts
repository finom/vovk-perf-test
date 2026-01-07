import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqq")
export default class BqqController {
  @operation({
    summary: "Get Bqq",
  })
  @get()
  static getBqq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bqq",
  })
  @post("{id}")
  static createBqq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
