import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwd")
export default class JwdController {
  @operation({
    summary: "Get Jwd",
  })
  @get()
  static getJwd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jwd",
  })
  @post("{id}")
  static createJwd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
