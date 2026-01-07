import { procedure, prefix, get, post, operation } from "vovk";

@prefix("juw")
export default class JuwController {
  @operation({
    summary: "Get Juw",
  })
  @get()
  static getJuw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Juw",
  })
  @post("{id}")
  static createJuw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
