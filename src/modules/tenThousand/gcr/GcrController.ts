import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcr")
export default class GcrController {
  @operation({
    summary: "Get Gcr",
  })
  @get()
  static getGcr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gcr",
  })
  @post("{id}")
  static createGcr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
