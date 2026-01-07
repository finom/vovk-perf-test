import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jie")
export default class JieController {
  @operation({
    summary: "Get Jie",
  })
  @get()
  static getJie = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jie",
  })
  @post("{id}")
  static createJie = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
