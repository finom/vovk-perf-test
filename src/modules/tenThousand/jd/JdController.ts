import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jd")
export default class JdController {
  @operation({
    summary: "Get Jd",
  })
  @get()
  static getJd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jd",
  })
  @post("{id}")
  static createJd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
