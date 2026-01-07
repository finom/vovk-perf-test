import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byo")
export default class ByoController {
  @operation({
    summary: "Get Byo",
  })
  @get()
  static getByo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Byo",
  })
  @post("{id}")
  static createByo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
