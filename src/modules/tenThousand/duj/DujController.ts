import { procedure, prefix, get, post, operation } from "vovk";

@prefix("duj")
export default class DujController {
  @operation({
    summary: "Get Duj",
  })
  @get()
  static getDuj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Duj",
  })
  @post("{id}")
  static createDuj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
