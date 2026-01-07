import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyq")
export default class DyqController {
  @operation({
    summary: "Get Dyq",
  })
  @get()
  static getDyq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dyq",
  })
  @post("{id}")
  static createDyq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
