import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcd")
export default class JcdController {
  @operation({
    summary: "Get Jcd",
  })
  @get()
  static getJcd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jcd",
  })
  @post("{id}")
  static createJcd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
