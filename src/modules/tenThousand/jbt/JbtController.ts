import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbt")
export default class JbtController {
  @operation({
    summary: "Get Jbt",
  })
  @get()
  static getJbt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jbt",
  })
  @post("{id}")
  static createJbt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
