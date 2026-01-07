import { procedure, prefix, get, post, operation } from "vovk";

@prefix("foa")
export default class FoaController {
  @operation({
    summary: "Get Foa",
  })
  @get()
  static getFoa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Foa",
  })
  @post("{id}")
  static createFoa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
