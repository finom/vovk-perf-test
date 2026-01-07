import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mya")
export default class MyaController {
  @operation({
    summary: "Get Mya",
  })
  @get()
  static getMya = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mya",
  })
  @post("{id}")
  static createMya = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
