import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jia")
export default class JiaController {
  @operation({
    summary: "Get Jia",
  })
  @get()
  static getJia = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jia",
  })
  @post("{id}")
  static createJia = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
