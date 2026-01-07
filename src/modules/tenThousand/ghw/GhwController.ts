import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghw")
export default class GhwController {
  @operation({
    summary: "Get Ghw",
  })
  @get()
  static getGhw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ghw",
  })
  @post("{id}")
  static createGhw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
