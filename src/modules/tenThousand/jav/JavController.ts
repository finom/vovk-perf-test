import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jav")
export default class JavController {
  @operation({
    summary: "Get Jav",
  })
  @get()
  static getJav = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jav",
  })
  @post("{id}")
  static createJav = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
