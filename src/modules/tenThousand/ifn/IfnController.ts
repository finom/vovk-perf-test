import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifn")
export default class IfnController {
  @operation({
    summary: "Get Ifn",
  })
  @get()
  static getIfn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ifn",
  })
  @post("{id}")
  static createIfn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
