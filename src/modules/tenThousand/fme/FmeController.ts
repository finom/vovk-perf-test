import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fme")
export default class FmeController {
  @operation({
    summary: "Get Fme",
  })
  @get()
  static getFme = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fme",
  })
  @post("{id}")
  static createFme = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
