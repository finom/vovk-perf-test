import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcg")
export default class JcgController {
  @operation({
    summary: "Get Jcg",
  })
  @get()
  static getJcg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jcg",
  })
  @post("{id}")
  static createJcg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
