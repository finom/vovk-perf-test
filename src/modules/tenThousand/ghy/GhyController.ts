import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghy")
export default class GhyController {
  @operation({
    summary: "Get Ghy",
  })
  @get()
  static getGhy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ghy",
  })
  @post("{id}")
  static createGhy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
