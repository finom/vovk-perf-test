import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nor")
export default class NorController {
  @operation({
    summary: "Get Nor",
  })
  @get()
  static getNor = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nor",
  })
  @post("{id}")
  static createNor = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
