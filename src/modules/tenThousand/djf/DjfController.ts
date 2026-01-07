import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djf")
export default class DjfController {
  @operation({
    summary: "Get Djf",
  })
  @get()
  static getDjf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Djf",
  })
  @post("{id}")
  static createDjf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
