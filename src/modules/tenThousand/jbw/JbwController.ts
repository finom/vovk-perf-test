import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbw")
export default class JbwController {
  @operation({
    summary: "Get Jbw",
  })
  @get()
  static getJbw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jbw",
  })
  @post("{id}")
  static createJbw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
