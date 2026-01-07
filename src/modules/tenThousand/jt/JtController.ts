import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jt")
export default class JtController {
  @operation({
    summary: "Get Jt",
  })
  @get()
  static getJt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jt",
  })
  @post("{id}")
  static createJt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
