import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbd")
export default class JbdController {
  @operation({
    summary: "Get Jbd",
  })
  @get()
  static getJbd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jbd",
  })
  @post("{id}")
  static createJbd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
