import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbq")
export default class JbqController {
  @operation({
    summary: "Get Jbq",
  })
  @get()
  static getJbq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jbq",
  })
  @post("{id}")
  static createJbq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
