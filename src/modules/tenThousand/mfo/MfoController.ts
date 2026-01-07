import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfo")
export default class MfoController {
  @operation({
    summary: "Get Mfo",
  })
  @get()
  static getMfo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfo",
  })
  @post("{id}")
  static createMfo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
