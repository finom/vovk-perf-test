import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkj")
export default class JkjController {
  @operation({
    summary: "Get Jkj",
  })
  @get()
  static getJkj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jkj",
  })
  @post("{id}")
  static createJkj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
