import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gag")
export default class GagController {
  @operation({
    summary: "Get Gag",
  })
  @get()
  static getGag = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gag",
  })
  @post("{id}")
  static createGag = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
