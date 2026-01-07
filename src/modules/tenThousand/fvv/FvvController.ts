import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvv")
export default class FvvController {
  @operation({
    summary: "Get Fvv",
  })
  @get()
  static getFvv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fvv",
  })
  @post("{id}")
  static createFvv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
