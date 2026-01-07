import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxd")
export default class JxdController {
  @operation({
    summary: "Get Jxd",
  })
  @get()
  static getJxd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jxd",
  })
  @post("{id}")
  static createJxd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
