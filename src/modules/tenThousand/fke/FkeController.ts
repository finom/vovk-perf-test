import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fke")
export default class FkeController {
  @operation({
    summary: "Get Fke",
  })
  @get()
  static getFke = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fke",
  })
  @post("{id}")
  static createFke = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
