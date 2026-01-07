import { procedure, prefix, get, post, operation } from "vovk";

@prefix("goe")
export default class GoeController {
  @operation({
    summary: "Get Goe",
  })
  @get()
  static getGoe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Goe",
  })
  @post("{id}")
  static createGoe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
