import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ma")
export default class MaController {
  @operation({
    summary: "Get Ma",
  })
  @get()
  static getMa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ma",
  })
  @post("{id}")
  static createMa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
