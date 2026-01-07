import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gke")
export default class GkeController {
  @operation({
    summary: "Get Gke",
  })
  @get()
  static getGke = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gke",
  })
  @post("{id}")
  static createGke = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
