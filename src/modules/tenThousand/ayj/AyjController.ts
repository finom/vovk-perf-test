import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayj")
export default class AyjController {
  @operation({
    summary: "Get Ayj",
  })
  @get()
  static getAyj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ayj",
  })
  @post("{id}")
  static createAyj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
