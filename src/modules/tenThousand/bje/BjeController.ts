import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bje")
export default class BjeController {
  @operation({
    summary: "Get Bje",
  })
  @get()
  static getBje = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bje",
  })
  @post("{id}")
  static createBje = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
