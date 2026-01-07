import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gku")
export default class GkuController {
  @operation({
    summary: "Get Gku",
  })
  @get()
  static getGku = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gku",
  })
  @post("{id}")
  static createGku = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
