import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbs")
export default class FbsController {
  @operation({
    summary: "Get Fbs",
  })
  @get()
  static getFbs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fbs",
  })
  @post("{id}")
  static createFbs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
