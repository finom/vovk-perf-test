import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfr")
export default class BfrController {
  @operation({
    summary: "Get Bfr",
  })
  @get()
  static getBfr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bfr",
  })
  @post("{id}")
  static createBfr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
