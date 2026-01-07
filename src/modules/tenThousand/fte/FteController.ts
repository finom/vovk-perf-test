import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fte")
export default class FteController {
  @operation({
    summary: "Get Fte",
  })
  @get()
  static getFte = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fte",
  })
  @post("{id}")
  static createFte = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
