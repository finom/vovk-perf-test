import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcs")
export default class GcsController {
  @operation({
    summary: "Get Gcs",
  })
  @get()
  static getGcs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gcs",
  })
  @post("{id}")
  static createGcs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
