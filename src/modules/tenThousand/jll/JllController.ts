import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jll")
export default class JllController {
  @operation({
    summary: "Get Jll",
  })
  @get()
  static getJll = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jll",
  })
  @post("{id}")
  static createJll = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
