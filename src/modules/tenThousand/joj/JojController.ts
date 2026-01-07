import { procedure, prefix, get, post, operation } from "vovk";

@prefix("joj")
export default class JojController {
  @operation({
    summary: "Get Joj",
  })
  @get()
  static getJoj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Joj",
  })
  @post("{id}")
  static createJoj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
