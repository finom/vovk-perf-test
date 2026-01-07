import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwd")
export default class CwdController {
  @operation({
    summary: "Get Cwd",
  })
  @get()
  static getCwd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cwd",
  })
  @post("{id}")
  static createCwd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
