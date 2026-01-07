import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfr")
export default class GfrController {
  @operation({
    summary: "Get Gfr",
  })
  @get()
  static getGfr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gfr",
  })
  @post("{id}")
  static createGfr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
