import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jju")
export default class JjuController {
  @operation({
    summary: "Get Jju",
  })
  @get()
  static getJju = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jju",
  })
  @post("{id}")
  static createJju = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
