import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdz")
export default class GdzController {
  @operation({
    summary: "Get Gdz",
  })
  @get()
  static getGdz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gdz",
  })
  @post("{id}")
  static createGdz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
