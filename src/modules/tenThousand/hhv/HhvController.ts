import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhv")
export default class HhvController {
  @operation({
    summary: "Get Hhv",
  })
  @get()
  static getHhv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hhv",
  })
  @post("{id}")
  static createHhv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
