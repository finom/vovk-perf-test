import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcw")
export default class GcwController {
  @operation({
    summary: "Get Gcw",
  })
  @get()
  static getGcw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gcw",
  })
  @post("{id}")
  static createGcw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
