import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfr")
export default class JfrController {
  @operation({
    summary: "Get Jfr",
  })
  @get()
  static getJfr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jfr",
  })
  @post("{id}")
  static createJfr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
