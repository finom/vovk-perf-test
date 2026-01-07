import { procedure, prefix, get, post, operation } from "vovk";

@prefix("loa")
export default class LoaController {
  @operation({
    summary: "Get Loa",
  })
  @get()
  static getLoa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Loa",
  })
  @post("{id}")
  static createLoa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
