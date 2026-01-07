import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcl")
export default class KclController {
  @operation({
    summary: "Get Kcl",
  })
  @get()
  static getKcl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kcl",
  })
  @post("{id}")
  static createKcl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
