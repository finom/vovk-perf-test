import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtx")
export default class JtxController {
  @operation({
    summary: "Get Jtx",
  })
  @get()
  static getJtx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jtx",
  })
  @post("{id}")
  static createJtx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
