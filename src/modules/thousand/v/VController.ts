import { procedure, prefix, get, post, operation } from "vovk";

@prefix("v")
export default class VController {
  @operation({
    summary: "Get V",
  })
  @get()
  static getV = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create V",
  })
  @post("{id}")
  static createV = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
