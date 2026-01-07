import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eie")
export default class EieController {
  @operation({
    summary: "Get Eie",
  })
  @get()
  static getEie = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eie",
  })
  @post("{id}")
  static createEie = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
