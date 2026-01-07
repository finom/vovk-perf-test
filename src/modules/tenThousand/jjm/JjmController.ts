import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjm")
export default class JjmController {
  @operation({
    summary: "Get Jjm",
  })
  @get()
  static getJjm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jjm",
  })
  @post("{id}")
  static createJjm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
