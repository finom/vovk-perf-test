import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jga")
export default class JgaController {
  @operation({
    summary: "Get Jga",
  })
  @get()
  static getJga = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jga",
  })
  @post("{id}")
  static createJga = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
