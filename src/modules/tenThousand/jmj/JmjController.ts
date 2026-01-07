import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmj")
export default class JmjController {
  @operation({
    summary: "Get Jmj",
  })
  @get()
  static getJmj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jmj",
  })
  @post("{id}")
  static createJmj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
