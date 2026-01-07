import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcl")
export default class JclController {
  @operation({
    summary: "Get Jcl",
  })
  @get()
  static getJcl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jcl",
  })
  @post("{id}")
  static createJcl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
