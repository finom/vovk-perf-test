import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkc")
export default class JkcController {
  @operation({
    summary: "Get Jkc",
  })
  @get()
  static getJkc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jkc",
  })
  @post("{id}")
  static createJkc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
