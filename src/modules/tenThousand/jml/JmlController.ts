import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jml")
export default class JmlController {
  @operation({
    summary: "Get Jml",
  })
  @get()
  static getJml = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jml",
  })
  @post("{id}")
  static createJml = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
