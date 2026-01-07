import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpm")
export default class GpmController {
  @operation({
    summary: "Get Gpm",
  })
  @get()
  static getGpm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gpm",
  })
  @post("{id}")
  static createGpm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
