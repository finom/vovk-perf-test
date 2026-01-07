import { procedure, prefix, get, post, operation } from "vovk";

@prefix("muw")
export default class MuwController {
  @operation({
    summary: "Get Muw",
  })
  @get()
  static getMuw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Muw",
  })
  @post("{id}")
  static createMuw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
