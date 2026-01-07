import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxj")
export default class JxjController {
  @operation({
    summary: "Get Jxj",
  })
  @get()
  static getJxj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jxj",
  })
  @post("{id}")
  static createJxj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
