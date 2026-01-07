import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djt")
export default class DjtController {
  @operation({
    summary: "Get Djt",
  })
  @get()
  static getDjt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Djt",
  })
  @post("{id}")
  static createDjt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
