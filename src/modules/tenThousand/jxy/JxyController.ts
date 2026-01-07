import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxy")
export default class JxyController {
  @operation({
    summary: "Get Jxy",
  })
  @get()
  static getJxy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jxy",
  })
  @post("{id}")
  static createJxy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
