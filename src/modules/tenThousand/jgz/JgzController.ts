import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgz")
export default class JgzController {
  @operation({
    summary: "Get Jgz",
  })
  @get()
  static getJgz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jgz",
  })
  @post("{id}")
  static createJgz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
