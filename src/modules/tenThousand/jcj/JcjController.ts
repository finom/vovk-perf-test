import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcj")
export default class JcjController {
  @operation({
    summary: "Get Jcj",
  })
  @get()
  static getJcj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jcj",
  })
  @post("{id}")
  static createJcj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
