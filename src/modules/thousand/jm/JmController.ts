import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jm")
export default class JmController {
  @operation({
    summary: "Get Jm",
  })
  @get()
  static getJm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jm",
  })
  @post("{id}")
  static createJm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
