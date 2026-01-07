import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abm")
export default class AbmController {
  @operation({
    summary: "Get Abm",
  })
  @get()
  static getAbm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abm",
  })
  @post("{id}")
  static createAbm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
