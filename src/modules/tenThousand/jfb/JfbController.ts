import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfb")
export default class JfbController {
  @operation({
    summary: "Get Jfb",
  })
  @get()
  static getJfb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jfb",
  })
  @post("{id}")
  static createJfb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
