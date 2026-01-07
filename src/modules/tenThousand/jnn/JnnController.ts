import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnn")
export default class JnnController {
  @operation({
    summary: "Get Jnn",
  })
  @get()
  static getJnn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jnn",
  })
  @post("{id}")
  static createJnn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
