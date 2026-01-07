import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gww")
export default class GwwController {
  @operation({
    summary: "Get Gww",
  })
  @get()
  static getGww = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gww",
  })
  @post("{id}")
  static createGww = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
