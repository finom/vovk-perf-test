import { procedure, prefix, get, post, operation } from "vovk";

@prefix("maf")
export default class MafController {
  @operation({
    summary: "Get Maf",
  })
  @get()
  static getMaf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Maf",
  })
  @post("{id}")
  static createMaf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
