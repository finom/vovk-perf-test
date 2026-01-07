import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mks")
export default class MksController {
  @operation({
    summary: "Get Mks",
  })
  @get()
  static getMks = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mks",
  })
  @post("{id}")
  static createMks = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
