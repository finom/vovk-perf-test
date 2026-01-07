import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwv")
export default class GwvController {
  @operation({
    summary: "Get Gwv",
  })
  @get()
  static getGwv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwv",
  })
  @post("{id}")
  static createGwv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
