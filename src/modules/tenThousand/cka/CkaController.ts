import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cka")
export default class CkaController {
  @operation({
    summary: "Get Cka",
  })
  @get()
  static getCka = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cka",
  })
  @post("{id}")
  static createCka = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
