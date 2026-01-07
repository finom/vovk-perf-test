import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wy")
export default class WyController {
  @operation({
    summary: "Get Wy",
  })
  @get()
  static getWy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Wy",
  })
  @post("{id}")
  static createWy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
