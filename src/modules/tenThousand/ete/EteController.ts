import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ete")
export default class EteController {
  @operation({
    summary: "Get Ete",
  })
  @get()
  static getEte = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ete",
  })
  @post("{id}")
  static createEte = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
