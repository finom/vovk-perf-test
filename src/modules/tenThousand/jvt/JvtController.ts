import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvt")
export default class JvtController {
  @operation({
    summary: "Get Jvt",
  })
  @get()
  static getJvt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jvt",
  })
  @post("{id}")
  static createJvt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
