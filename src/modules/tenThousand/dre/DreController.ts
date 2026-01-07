import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dre")
export default class DreController {
  @operation({
    summary: "Get Dre",
  })
  @get()
  static getDre = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dre",
  })
  @post("{id}")
  static createDre = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
