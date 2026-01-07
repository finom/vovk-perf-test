import { procedure, prefix, get, post, operation } from "vovk";

@prefix("caf")
export default class CafController {
  @operation({
    summary: "Get Caf",
  })
  @get()
  static getCaf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Caf",
  })
  @post("{id}")
  static createCaf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
