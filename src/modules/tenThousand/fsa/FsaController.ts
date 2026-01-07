import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsa")
export default class FsaController {
  @operation({
    summary: "Get Fsa",
  })
  @get()
  static getFsa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fsa",
  })
  @post("{id}")
  static createFsa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
