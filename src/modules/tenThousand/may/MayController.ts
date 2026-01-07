import { procedure, prefix, get, post, operation } from "vovk";

@prefix("may")
export default class MayController {
  @operation({
    summary: "Get May",
  })
  @get()
  static getMay = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create May",
  })
  @post("{id}")
  static createMay = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
