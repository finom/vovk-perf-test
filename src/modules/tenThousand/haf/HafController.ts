import { procedure, prefix, get, post, operation } from "vovk";

@prefix("haf")
export default class HafController {
  @operation({
    summary: "Get Haf",
  })
  @get()
  static getHaf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Haf",
  })
  @post("{id}")
  static createHaf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
