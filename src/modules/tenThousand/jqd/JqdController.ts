import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqd")
export default class JqdController {
  @operation({
    summary: "Get Jqd",
  })
  @get()
  static getJqd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jqd",
  })
  @post("{id}")
  static createJqd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
