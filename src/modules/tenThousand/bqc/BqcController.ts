import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqc")
export default class BqcController {
  @operation({
    summary: "Get Bqc",
  })
  @get()
  static getBqc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bqc",
  })
  @post("{id}")
  static createBqc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
