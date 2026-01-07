import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egr")
export default class EgrController {
  @operation({
    summary: "Get Egr",
  })
  @get()
  static getEgr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Egr",
  })
  @post("{id}")
  static createEgr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
