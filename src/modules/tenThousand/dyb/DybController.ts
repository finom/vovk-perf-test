import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyb")
export default class DybController {
  @operation({
    summary: "Get Dyb",
  })
  @get()
  static getDyb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dyb",
  })
  @post("{id}")
  static createDyb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
