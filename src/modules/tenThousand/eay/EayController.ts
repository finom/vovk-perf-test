import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eay")
export default class EayController {
  @operation({
    summary: "Get Eay",
  })
  @get()
  static getEay = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eay",
  })
  @post("{id}")
  static createEay = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
