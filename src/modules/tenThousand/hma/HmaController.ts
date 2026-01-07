import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hma")
export default class HmaController {
  @operation({
    summary: "Get Hma",
  })
  @get()
  static getHma = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hma",
  })
  @post("{id}")
  static createHma = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
