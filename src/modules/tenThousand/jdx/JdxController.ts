import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdx")
export default class JdxController {
  @operation({
    summary: "Get Jdx",
  })
  @get()
  static getJdx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jdx",
  })
  @post("{id}")
  static createJdx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
