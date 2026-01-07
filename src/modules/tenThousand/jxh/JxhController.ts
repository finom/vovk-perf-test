import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxh")
export default class JxhController {
  @operation({
    summary: "Get Jxh",
  })
  @get()
  static getJxh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jxh",
  })
  @post("{id}")
  static createJxh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
