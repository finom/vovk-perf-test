import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nka")
export default class NkaController {
  @operation({
    summary: "Get Nka",
  })
  @get()
  static getNka = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nka",
  })
  @post("{id}")
  static createNka = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
