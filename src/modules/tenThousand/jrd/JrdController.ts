import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrd")
export default class JrdController {
  @operation({
    summary: "Get Jrd",
  })
  @get()
  static getJrd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jrd",
  })
  @post("{id}")
  static createJrd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
