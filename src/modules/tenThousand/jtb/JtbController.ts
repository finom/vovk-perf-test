import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtb")
export default class JtbController {
  @operation({
    summary: "Get Jtb",
  })
  @get()
  static getJtb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jtb",
  })
  @post("{id}")
  static createJtb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
