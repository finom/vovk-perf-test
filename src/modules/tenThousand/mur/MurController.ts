import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mur")
export default class MurController {
  @operation({
    summary: "Get Mur",
  })
  @get()
  static getMur = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mur",
  })
  @post("{id}")
  static createMur = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
