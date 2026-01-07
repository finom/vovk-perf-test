import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtd")
export default class JtdController {
  @operation({
    summary: "Get Jtd",
  })
  @get()
  static getJtd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jtd",
  })
  @post("{id}")
  static createJtd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
