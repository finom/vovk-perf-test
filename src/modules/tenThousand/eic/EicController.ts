import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eic")
export default class EicController {
  @operation({
    summary: "Get Eic",
  })
  @get()
  static getEic = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eic",
  })
  @post("{id}")
  static createEic = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
