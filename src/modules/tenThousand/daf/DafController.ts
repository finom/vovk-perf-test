import { procedure, prefix, get, post, operation } from "vovk";

@prefix("daf")
export default class DafController {
  @operation({
    summary: "Get Daf",
  })
  @get()
  static getDaf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Daf",
  })
  @post("{id}")
  static createDaf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
