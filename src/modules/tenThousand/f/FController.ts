import { procedure, prefix, get, post, operation } from "vovk";

@prefix("f")
export default class FController {
  @operation({
    summary: "Get F",
  })
  @get()
  static getF = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create F",
  })
  @post("{id}")
  static createF = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
