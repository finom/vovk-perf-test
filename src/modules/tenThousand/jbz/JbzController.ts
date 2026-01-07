import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbz")
export default class JbzController {
  @operation({
    summary: "Get Jbz",
  })
  @get()
  static getJbz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jbz",
  })
  @post("{id}")
  static createJbz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
