import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbf")
export default class JbfController {
  @operation({
    summary: "Get Jbf",
  })
  @get()
  static getJbf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jbf",
  })
  @post("{id}")
  static createJbf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
