import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrc")
export default class JrcController {
  @operation({
    summary: "Get Jrc",
  })
  @get()
  static getJrc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jrc",
  })
  @post("{id}")
  static createJrc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
