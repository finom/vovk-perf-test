import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gur")
export default class GurController {
  @operation({
    summary: "Get Gur",
  })
  @get()
  static getGur = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gur",
  })
  @post("{id}")
  static createGur = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
