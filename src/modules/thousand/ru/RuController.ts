import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ru")
export default class RuController {
  @operation({
    summary: "Get Ru",
  })
  @get()
  static getRu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ru",
  })
  @post("{id}")
  static createRu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
