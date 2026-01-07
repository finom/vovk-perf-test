import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dka")
export default class DkaController {
  @operation({
    summary: "Get Dka",
  })
  @get()
  static getDka = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dka",
  })
  @post("{id}")
  static createDka = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
