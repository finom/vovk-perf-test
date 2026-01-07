import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcg")
export default class GcgController {
  @operation({
    summary: "Get Gcg",
  })
  @get()
  static getGcg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gcg",
  })
  @post("{id}")
  static createGcg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
