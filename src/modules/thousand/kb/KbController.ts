import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kb")
export default class KbController {
  @operation({
    summary: "Get Kb",
  })
  @get()
  static getKb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kb",
  })
  @post("{id}")
  static createKb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
