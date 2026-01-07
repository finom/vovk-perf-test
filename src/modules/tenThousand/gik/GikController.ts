import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gik")
export default class GikController {
  @operation({
    summary: "Get Gik",
  })
  @get()
  static getGik = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gik",
  })
  @post("{id}")
  static createGik = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
