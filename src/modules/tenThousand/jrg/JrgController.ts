import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrg")
export default class JrgController {
  @operation({
    summary: "Get Jrg",
  })
  @get()
  static getJrg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jrg",
  })
  @post("{id}")
  static createJrg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
