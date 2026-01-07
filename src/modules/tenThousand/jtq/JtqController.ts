import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtq")
export default class JtqController {
  @operation({
    summary: "Get Jtq",
  })
  @get()
  static getJtq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jtq",
  })
  @post("{id}")
  static createJtq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
