import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghg")
export default class GhgController {
  @operation({
    summary: "Get Ghg",
  })
  @get()
  static getGhg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ghg",
  })
  @post("{id}")
  static createGhg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
