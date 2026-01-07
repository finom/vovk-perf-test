import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyl")
export default class JylController {
  @operation({
    summary: "Get Jyl",
  })
  @get()
  static getJyl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jyl",
  })
  @post("{id}")
  static createJyl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
