import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcz")
export default class JczController {
  @operation({
    summary: "Get Jcz",
  })
  @get()
  static getJcz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jcz",
  })
  @post("{id}")
  static createJcz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
