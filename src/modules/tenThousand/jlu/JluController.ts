import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlu")
export default class JluController {
  @operation({
    summary: "Get Jlu",
  })
  @get()
  static getJlu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jlu",
  })
  @post("{id}")
  static createJlu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
