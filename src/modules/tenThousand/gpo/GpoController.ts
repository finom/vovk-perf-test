import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpo")
export default class GpoController {
  @operation({
    summary: "Get Gpo",
  })
  @get()
  static getGpo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gpo",
  })
  @post("{id}")
  static createGpo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
