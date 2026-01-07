import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyu")
export default class FyuController {
  @operation({
    summary: "Get Fyu",
  })
  @get()
  static getFyu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fyu",
  })
  @post("{id}")
  static createFyu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
