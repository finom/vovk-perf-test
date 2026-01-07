import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zv")
export default class ZvController {
  @operation({
    summary: "Get Zv",
  })
  @get()
  static getZv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zv",
  })
  @post("{id}")
  static createZv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
