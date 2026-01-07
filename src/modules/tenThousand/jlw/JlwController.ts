import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlw")
export default class JlwController {
  @operation({
    summary: "Get Jlw",
  })
  @get()
  static getJlw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jlw",
  })
  @post("{id}")
  static createJlw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
