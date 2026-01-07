import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqi")
export default class BqiController {
  @operation({
    summary: "Get Bqi",
  })
  @get()
  static getBqi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bqi",
  })
  @post("{id}")
  static createBqi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
