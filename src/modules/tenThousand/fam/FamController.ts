import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fam")
export default class FamController {
  @operation({
    summary: "Get Fam",
  })
  @get()
  static getFam = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fam",
  })
  @post("{id}")
  static createFam = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
