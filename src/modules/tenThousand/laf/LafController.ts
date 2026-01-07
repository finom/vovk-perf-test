import { procedure, prefix, get, post, operation } from "vovk";

@prefix("laf")
export default class LafController {
  @operation({
    summary: "Get Laf",
  })
  @get()
  static getLaf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Laf",
  })
  @post("{id}")
  static createLaf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
