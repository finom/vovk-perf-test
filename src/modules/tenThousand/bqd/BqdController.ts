import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqd")
export default class BqdController {
  @operation({
    summary: "Get Bqd",
  })
  @get()
  static getBqd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bqd",
  })
  @post("{id}")
  static createBqd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
