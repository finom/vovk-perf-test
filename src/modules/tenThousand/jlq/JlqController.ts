import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlq")
export default class JlqController {
  @operation({
    summary: "Get Jlq",
  })
  @get()
  static getJlq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jlq",
  })
  @post("{id}")
  static createJlq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
