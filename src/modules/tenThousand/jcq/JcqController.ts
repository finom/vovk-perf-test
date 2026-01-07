import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcq")
export default class JcqController {
  @operation({
    summary: "Get Jcq",
  })
  @get()
  static getJcq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jcq",
  })
  @post("{id}")
  static createJcq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
