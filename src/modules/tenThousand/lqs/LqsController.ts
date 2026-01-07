import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqs")
export default class LqsController {
  @operation({
    summary: "Get Lqs",
  })
  @get()
  static getLqs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lqs",
  })
  @post("{id}")
  static createLqs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
