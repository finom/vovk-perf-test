import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtr")
export default class JtrController {
  @operation({
    summary: "Get Jtr",
  })
  @get()
  static getJtr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jtr",
  })
  @post("{id}")
  static createJtr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
