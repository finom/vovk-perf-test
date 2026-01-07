import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkq")
export default class KkqController {
  @operation({
    summary: "Get Kkq",
  })
  @get()
  static getKkq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kkq",
  })
  @post("{id}")
  static createKkq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
