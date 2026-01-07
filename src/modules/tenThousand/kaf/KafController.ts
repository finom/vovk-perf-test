import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kaf")
export default class KafController {
  @operation({
    summary: "Get Kaf",
  })
  @get()
  static getKaf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kaf",
  })
  @post("{id}")
  static createKaf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
