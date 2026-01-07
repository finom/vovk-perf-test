import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fol")
export default class FolController {
  @operation({
    summary: "Get Fol",
  })
  @get()
  static getFol = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fol",
  })
  @post("{id}")
  static createFol = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
