import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abs")
export default class AbsController {
  @operation({
    summary: "Get Abs",
  })
  @get()
  static getAbs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abs",
  })
  @post("{id}")
  static createAbs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
