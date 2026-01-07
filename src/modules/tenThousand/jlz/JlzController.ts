import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlz")
export default class JlzController {
  @operation({
    summary: "Get Jlz",
  })
  @get()
  static getJlz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jlz",
  })
  @post("{id}")
  static createJlz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
