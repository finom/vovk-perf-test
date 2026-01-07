import { procedure, prefix, get, post, operation } from "vovk";

@prefix("baf")
export default class BafController {
  @operation({
    summary: "Get Baf",
  })
  @get()
  static getBaf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Baf",
  })
  @post("{id}")
  static createBaf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
