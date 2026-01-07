import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpy")
export default class GpyController {
  @operation({
    summary: "Get Gpy",
  })
  @get()
  static getGpy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gpy",
  })
  @post("{id}")
  static createGpy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
