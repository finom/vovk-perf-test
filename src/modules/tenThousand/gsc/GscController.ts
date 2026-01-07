import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsc")
export default class GscController {
  @operation({
    summary: "Get Gsc",
  })
  @get()
  static getGsc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gsc",
  })
  @post("{id}")
  static createGsc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
