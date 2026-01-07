import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adl")
export default class AdlController {
  @operation({
    summary: "Get Adl",
  })
  @get()
  static getAdl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Adl",
  })
  @post("{id}")
  static createAdl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
