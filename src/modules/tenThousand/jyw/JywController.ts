import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyw")
export default class JywController {
  @operation({
    summary: "Get Jyw",
  })
  @get()
  static getJyw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jyw",
  })
  @post("{id}")
  static createJyw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
