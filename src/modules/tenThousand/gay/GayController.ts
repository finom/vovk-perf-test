import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gay")
export default class GayController {
  @operation({
    summary: "Get Gay",
  })
  @get()
  static getGay = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gay",
  })
  @post("{id}")
  static createGay = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
