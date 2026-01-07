import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mik")
export default class MikController {
  @operation({
    summary: "Get Mik",
  })
  @get()
  static getMik = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mik",
  })
  @post("{id}")
  static createMik = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
