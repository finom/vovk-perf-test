import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfp")
export default class JfpController {
  @operation({
    summary: "Get Jfp",
  })
  @get()
  static getJfp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jfp",
  })
  @post("{id}")
  static createJfp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
