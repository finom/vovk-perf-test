import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lli")
export default class LliController {
  @operation({
    summary: "Get Lli",
  })
  @get()
  static getLli = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lli",
  })
  @post("{id}")
  static createLli = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
