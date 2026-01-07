import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aaf")
export default class AafController {
  @operation({
    summary: "Get Aaf",
  })
  @get()
  static getAaf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aaf",
  })
  @post("{id}")
  static createAaf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
