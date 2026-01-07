import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfl")
export default class GflController {
  @operation({
    summary: "Get Gfl",
  })
  @get()
  static getGfl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gfl",
  })
  @post("{id}")
  static createGfl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
