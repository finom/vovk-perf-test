import { procedure, prefix, get, post, operation } from "vovk";

@prefix("daa")
export default class DaaController {
  @operation({
    summary: "Get Daa",
  })
  @get()
  static getDaa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Daa",
  })
  @post("{id}")
  static createDaa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
