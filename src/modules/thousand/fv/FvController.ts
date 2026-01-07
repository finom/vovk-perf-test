import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fv")
export default class FvController {
  @operation({
    summary: "Get Fv",
  })
  @get()
  static getFv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fv",
  })
  @post("{id}")
  static createFv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
