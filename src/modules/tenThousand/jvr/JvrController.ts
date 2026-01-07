import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvr")
export default class JvrController {
  @operation({
    summary: "Get Jvr",
  })
  @get()
  static getJvr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jvr",
  })
  @post("{id}")
  static createJvr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
