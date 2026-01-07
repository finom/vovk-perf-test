import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgo")
export default class FgoController {
  @operation({
    summary: "Get Fgo",
  })
  @get()
  static getFgo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fgo",
  })
  @post("{id}")
  static createFgo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
