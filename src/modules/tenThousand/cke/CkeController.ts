import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cke")
export default class CkeController {
  @operation({
    summary: "Get Cke",
  })
  @get()
  static getCke = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cke",
  })
  @post("{id}")
  static createCke = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
