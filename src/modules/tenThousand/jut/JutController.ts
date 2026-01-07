import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jut")
export default class JutController {
  @operation({
    summary: "Get Jut",
  })
  @get()
  static getJut = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jut",
  })
  @post("{id}")
  static createJut = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
