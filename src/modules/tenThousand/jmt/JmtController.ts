import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmt")
export default class JmtController {
  @operation({
    summary: "Get Jmt",
  })
  @get()
  static getJmt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jmt",
  })
  @post("{id}")
  static createJmt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
