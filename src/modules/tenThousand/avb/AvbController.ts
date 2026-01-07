import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avb")
export default class AvbController {
  @operation({
    summary: "Get Avb",
  })
  @get()
  static getAvb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avb",
  })
  @post("{id}")
  static createAvb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
