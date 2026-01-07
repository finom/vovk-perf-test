import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehv")
export default class EhvController {
  @operation({
    summary: "Get Ehv",
  })
  @get()
  static getEhv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ehv",
  })
  @post("{id}")
  static createEhv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
