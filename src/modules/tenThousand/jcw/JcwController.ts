import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcw")
export default class JcwController {
  @operation({
    summary: "Get Jcw",
  })
  @get()
  static getJcw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jcw",
  })
  @post("{id}")
  static createJcw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
