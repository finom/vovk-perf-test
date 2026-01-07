import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jso")
export default class JsoController {
  @operation({
    summary: "Get Jso",
  })
  @get()
  static getJso = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jso",
  })
  @post("{id}")
  static createJso = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
