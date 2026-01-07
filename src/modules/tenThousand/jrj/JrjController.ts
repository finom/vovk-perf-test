import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrj")
export default class JrjController {
  @operation({
    summary: "Get Jrj",
  })
  @get()
  static getJrj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jrj",
  })
  @post("{id}")
  static createJrj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
