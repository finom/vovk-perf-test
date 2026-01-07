import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blg")
export default class BlgController {
  @operation({
    summary: "Get Blg",
  })
  @get()
  static getBlg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Blg",
  })
  @post("{id}")
  static createBlg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
