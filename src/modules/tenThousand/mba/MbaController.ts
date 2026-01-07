import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mba")
export default class MbaController {
  @operation({
    summary: "Get Mba",
  })
  @get()
  static getMba = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mba",
  })
  @post("{id}")
  static createMba = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
