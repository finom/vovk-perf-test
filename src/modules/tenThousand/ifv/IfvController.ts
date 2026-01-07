import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifv")
export default class IfvController {
  @operation({
    summary: "Get Ifv",
  })
  @get()
  static getIfv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ifv",
  })
  @post("{id}")
  static createIfv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
