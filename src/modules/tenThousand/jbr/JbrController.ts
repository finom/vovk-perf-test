import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbr")
export default class JbrController {
  @operation({
    summary: "Get Jbr",
  })
  @get()
  static getJbr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jbr",
  })
  @post("{id}")
  static createJbr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
