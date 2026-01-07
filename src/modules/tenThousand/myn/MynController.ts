import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myn")
export default class MynController {
  @operation({
    summary: "Get Myn",
  })
  @get()
  static getMyn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Myn",
  })
  @post("{id}")
  static createMyn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
