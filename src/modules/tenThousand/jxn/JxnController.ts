import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxn")
export default class JxnController {
  @operation({
    summary: "Get Jxn",
  })
  @get()
  static getJxn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jxn",
  })
  @post("{id}")
  static createJxn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
