import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqt")
export default class BqtController {
  @operation({
    summary: "Get Bqt",
  })
  @get()
  static getBqt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bqt",
  })
  @post("{id}")
  static createBqt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
