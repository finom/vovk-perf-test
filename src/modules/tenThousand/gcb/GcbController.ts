import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcb")
export default class GcbController {
  @operation({
    summary: "Get Gcb",
  })
  @get()
  static getGcb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gcb",
  })
  @post("{id}")
  static createGcb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
