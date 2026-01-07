import { procedure, prefix, get, post, operation } from "vovk";

@prefix("buk")
export default class BukController {
  @operation({
    summary: "Get Buk",
  })
  @get()
  static getBuk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Buk",
  })
  @post("{id}")
  static createBuk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
