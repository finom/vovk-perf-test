import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekg")
export default class EkgController {
  @operation({
    summary: "Get Ekg",
  })
  @get()
  static getEkg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ekg",
  })
  @post("{id}")
  static createEkg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
