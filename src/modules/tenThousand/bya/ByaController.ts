import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bya")
export default class ByaController {
  @operation({
    summary: "Get Bya",
  })
  @get()
  static getBya = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bya",
  })
  @post("{id}")
  static createBya = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
