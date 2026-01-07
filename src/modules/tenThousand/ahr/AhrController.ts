import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahr")
export default class AhrController {
  @operation({
    summary: "Get Ahr",
  })
  @get()
  static getAhr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ahr",
  })
  @post("{id}")
  static createAhr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
