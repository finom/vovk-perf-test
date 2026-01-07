import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpo")
export default class JpoController {
  @operation({
    summary: "Get Jpo",
  })
  @get()
  static getJpo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jpo",
  })
  @post("{id}")
  static createJpo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
