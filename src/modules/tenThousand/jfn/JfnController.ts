import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfn")
export default class JfnController {
  @operation({
    summary: "Get Jfn",
  })
  @get()
  static getJfn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jfn",
  })
  @post("{id}")
  static createJfn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
