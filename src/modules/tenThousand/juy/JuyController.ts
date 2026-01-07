import { procedure, prefix, get, post, operation } from "vovk";

@prefix("juy")
export default class JuyController {
  @operation({
    summary: "Get Juy",
  })
  @get()
  static getJuy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Juy",
  })
  @post("{id}")
  static createJuy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
