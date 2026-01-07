import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxb")
export default class JxbController {
  @operation({
    summary: "Get Jxb",
  })
  @get()
  static getJxb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jxb",
  })
  @post("{id}")
  static createJxb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
