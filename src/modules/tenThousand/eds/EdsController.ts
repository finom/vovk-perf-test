import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eds")
export default class EdsController {
  @operation({
    summary: "Get Eds",
  })
  @get()
  static getEds = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eds",
  })
  @post("{id}")
  static createEds = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
