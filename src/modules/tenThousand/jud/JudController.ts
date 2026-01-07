import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jud")
export default class JudController {
  @operation({
    summary: "Get Jud",
  })
  @get()
  static getJud = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jud",
  })
  @post("{id}")
  static createJud = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
