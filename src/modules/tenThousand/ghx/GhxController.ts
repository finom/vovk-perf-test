import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghx")
export default class GhxController {
  @operation({
    summary: "Get Ghx",
  })
  @get()
  static getGhx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ghx",
  })
  @post("{id}")
  static createGhx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
