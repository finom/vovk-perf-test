import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jow")
export default class JowController {
  @operation({
    summary: "Get Jow",
  })
  @get()
  static getJow = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jow",
  })
  @post("{id}")
  static createJow = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
