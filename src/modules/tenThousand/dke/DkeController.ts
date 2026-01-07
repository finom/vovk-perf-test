import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dke")
export default class DkeController {
  @operation({
    summary: "Get Dke",
  })
  @get()
  static getDke = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dke",
  })
  @post("{id}")
  static createDke = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
