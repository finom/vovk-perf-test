import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhs")
export default class BhsController {
  @operation({
    summary: "Get Bhs",
  })
  @get()
  static getBhs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bhs",
  })
  @post("{id}")
  static createBhs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
