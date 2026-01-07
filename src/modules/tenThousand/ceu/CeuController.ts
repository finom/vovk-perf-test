import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ceu")
export default class CeuController {
  @operation({
    summary: "Get Ceu",
  })
  @get()
  static getCeu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ceu",
  })
  @post("{id}")
  static createCeu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
