import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqs")
export default class FqsController {
  @operation({
    summary: "Get Fqs",
  })
  @get()
  static getFqs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fqs",
  })
  @post("{id}")
  static createFqs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
