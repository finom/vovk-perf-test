import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icl")
export default class IclController {
  @operation({
    summary: "Get Icl",
  })
  @get()
  static getIcl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Icl",
  })
  @post("{id}")
  static createIcl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
