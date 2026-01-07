import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbi")
export default class JbiController {
  @operation({
    summary: "Get Jbi",
  })
  @get()
  static getJbi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jbi",
  })
  @post("{id}")
  static createJbi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
