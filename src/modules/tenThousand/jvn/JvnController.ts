import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvn")
export default class JvnController {
  @operation({
    summary: "Get Jvn",
  })
  @get()
  static getJvn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jvn",
  })
  @post("{id}")
  static createJvn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
