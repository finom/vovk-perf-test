import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcr")
export default class KcrController {
  @operation({
    summary: "Get Kcr",
  })
  @get()
  static getKcr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kcr",
  })
  @post("{id}")
  static createKcr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
