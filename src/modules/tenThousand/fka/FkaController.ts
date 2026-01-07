import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fka")
export default class FkaController {
  @operation({
    summary: "Get Fka",
  })
  @get()
  static getFka = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fka",
  })
  @post("{id}")
  static createFka = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
