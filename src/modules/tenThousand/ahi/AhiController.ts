import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahi")
export default class AhiController {
  @operation({
    summary: "Get Ahi",
  })
  @get()
  static getAhi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ahi",
  })
  @post("{id}")
  static createAhi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
