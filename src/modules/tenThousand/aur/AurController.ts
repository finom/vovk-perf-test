import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aur")
export default class AurController {
  @operation({
    summary: "Get Aur",
  })
  @get()
  static getAur = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aur",
  })
  @post("{id}")
  static createAur = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
