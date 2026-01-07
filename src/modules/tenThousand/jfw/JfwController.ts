import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfw")
export default class JfwController {
  @operation({
    summary: "Get Jfw",
  })
  @get()
  static getJfw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jfw",
  })
  @post("{id}")
  static createJfw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
