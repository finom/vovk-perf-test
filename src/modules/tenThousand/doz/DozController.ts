import { procedure, prefix, get, post, operation } from "vovk";

@prefix("doz")
export default class DozController {
  @operation({
    summary: "Get Doz",
  })
  @get()
  static getDoz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Doz",
  })
  @post("{id}")
  static createDoz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
