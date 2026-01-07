import { procedure, prefix, get, post, operation } from "vovk";

@prefix("j")
export default class JController {
  @operation({
    summary: "Get J",
  })
  @get()
  static getJ = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create J",
  })
  @post("{id}")
  static createJ = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
