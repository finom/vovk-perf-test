import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxz")
export default class JxzController {
  @operation({
    summary: "Get Jxz",
  })
  @get()
  static getJxz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jxz",
  })
  @post("{id}")
  static createJxz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
