import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfq")
export default class JfqController {
  @operation({
    summary: "Get Jfq",
  })
  @get()
  static getJfq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jfq",
  })
  @post("{id}")
  static createJfq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
