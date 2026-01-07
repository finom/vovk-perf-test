import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cuw")
export default class CuwController {
  @operation({
    summary: "Get Cuw",
  })
  @get()
  static getCuw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cuw",
  })
  @post("{id}")
  static createCuw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
