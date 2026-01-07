import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgj")
export default class JgjController {
  @operation({
    summary: "Get Jgj",
  })
  @get()
  static getJgj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jgj",
  })
  @post("{id}")
  static createJgj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
