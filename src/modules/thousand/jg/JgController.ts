import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jg")
export default class JgController {
  @operation({
    summary: "Get Jg",
  })
  @get()
  static getJg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jg",
  })
  @post("{id}")
  static createJg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
