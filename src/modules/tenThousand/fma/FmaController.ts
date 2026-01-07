import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fma")
export default class FmaController {
  @operation({
    summary: "Get Fma",
  })
  @get()
  static getFma = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fma",
  })
  @post("{id}")
  static createFma = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
