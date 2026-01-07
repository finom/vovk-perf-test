import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqt")
export default class JqtController {
  @operation({
    summary: "Get Jqt",
  })
  @get()
  static getJqt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jqt",
  })
  @post("{id}")
  static createJqt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
