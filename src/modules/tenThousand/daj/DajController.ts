import { procedure, prefix, get, post, operation } from "vovk";

@prefix("daj")
export default class DajController {
  @operation({
    summary: "Get Daj",
  })
  @get()
  static getDaj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Daj",
  })
  @post("{id}")
  static createDaj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
