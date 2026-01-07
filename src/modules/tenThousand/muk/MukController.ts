import { procedure, prefix, get, post, operation } from "vovk";

@prefix("muk")
export default class MukController {
  @operation({
    summary: "Get Muk",
  })
  @get()
  static getMuk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Muk",
  })
  @post("{id}")
  static createMuk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
