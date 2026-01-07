import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mts")
export default class MtsController {
  @operation({
    summary: "Get Mts",
  })
  @get()
  static getMts = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mts",
  })
  @post("{id}")
  static createMts = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
