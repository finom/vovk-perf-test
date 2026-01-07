import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bte")
export default class BteController {
  @operation({
    summary: "Get Bte",
  })
  @get()
  static getBte = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bte",
  })
  @post("{id}")
  static createBte = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
