import { procedure, prefix, get, post, operation } from "vovk";

@prefix("un")
export default class UnController {
  @operation({
    summary: "Get Un",
  })
  @get()
  static getUn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Un",
  })
  @post("{id}")
  static createUn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
