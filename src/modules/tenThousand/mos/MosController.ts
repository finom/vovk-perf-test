import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mos")
export default class MosController {
  @operation({
    summary: "Get Mos",
  })
  @get()
  static getMos = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mos",
  })
  @post("{id}")
  static createMos = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
