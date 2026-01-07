import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bul")
export default class BulController {
  @operation({
    summary: "Get Bul",
  })
  @get()
  static getBul = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bul",
  })
  @post("{id}")
  static createBul = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
