import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcq")
export default class GcqController {
  @operation({
    summary: "Get Gcq",
  })
  @get()
  static getGcq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gcq",
  })
  @post("{id}")
  static createGcq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
