import { procedure, prefix, get, post, operation } from "vovk";

@prefix("faj")
export default class FajController {
  @operation({
    summary: "Get Faj",
  })
  @get()
  static getFaj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Faj",
  })
  @post("{id}")
  static createFaj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
