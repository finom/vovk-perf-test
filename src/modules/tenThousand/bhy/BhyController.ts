import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhy")
export default class BhyController {
  @operation({
    summary: "Get Bhy",
  })
  @get()
  static getBhy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bhy",
  })
  @post("{id}")
  static createBhy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
