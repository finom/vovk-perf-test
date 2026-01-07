import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfv")
export default class JfvController {
  @operation({
    summary: "Get Jfv",
  })
  @get()
  static getJfv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jfv",
  })
  @post("{id}")
  static createJfv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
