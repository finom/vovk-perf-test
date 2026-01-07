import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqr")
export default class BqrController {
  @operation({
    summary: "Get Bqr",
  })
  @get()
  static getBqr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bqr",
  })
  @post("{id}")
  static createBqr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
