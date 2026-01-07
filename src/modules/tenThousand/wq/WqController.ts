import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wq")
export default class WqController {
  @operation({
    summary: "Get Wq",
  })
  @get()
  static getWq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Wq",
  })
  @post("{id}")
  static createWq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
