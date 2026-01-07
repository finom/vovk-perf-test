import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrm")
export default class JrmController {
  @operation({
    summary: "Get Jrm",
  })
  @get()
  static getJrm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jrm",
  })
  @post("{id}")
  static createJrm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
