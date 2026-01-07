import { procedure, prefix, get, post, operation } from "vovk";

@prefix("laj")
export default class LajController {
  @operation({
    summary: "Get Laj",
  })
  @get()
  static getLaj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Laj",
  })
  @post("{id}")
  static createLaj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
