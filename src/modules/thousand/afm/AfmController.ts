import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afm")
export default class AfmController {
  @operation({
    summary: "Get Afm",
  })
  @get()
  static getAfm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Afm",
  })
  @post("{id}")
  static createAfm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
