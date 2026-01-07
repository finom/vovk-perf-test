import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghb")
export default class GhbController {
  @operation({
    summary: "Get Ghb",
  })
  @get()
  static getGhb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ghb",
  })
  @post("{id}")
  static createGhb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
