import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gex")
export default class GexController {
  @operation({
    summary: "Get Gex",
  })
  @get()
  static getGex = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gex",
  })
  @post("{id}")
  static createGex = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
