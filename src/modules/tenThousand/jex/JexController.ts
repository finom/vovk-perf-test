import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jex")
export default class JexController {
  @operation({
    summary: "Get Jex",
  })
  @get()
  static getJex = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jex",
  })
  @post("{id}")
  static createJex = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
