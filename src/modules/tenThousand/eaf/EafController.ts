import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eaf")
export default class EafController {
  @operation({
    summary: "Get Eaf",
  })
  @get()
  static getEaf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eaf",
  })
  @post("{id}")
  static createEaf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
