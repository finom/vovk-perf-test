import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lig")
export default class LigController {
  @operation({
    summary: "Get Lig",
  })
  @get()
  static getLig = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lig",
  })
  @post("{id}")
  static createLig = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
