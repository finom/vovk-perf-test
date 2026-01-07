import { procedure, prefix, get, post, operation } from "vovk";

@prefix("naf")
export default class NafController {
  @operation({
    summary: "Get Naf",
  })
  @get()
  static getNaf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Naf",
  })
  @post("{id}")
  static createNaf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
