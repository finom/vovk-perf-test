import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffy")
export default class FfyController {
  @operation({
    summary: "Get Ffy",
  })
  @get()
  static getFfy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ffy",
  })
  @post("{id}")
  static createFfy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
