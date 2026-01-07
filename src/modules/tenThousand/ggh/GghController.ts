import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggh")
export default class GghController {
  @operation({
    summary: "Get Ggh",
  })
  @get()
  static getGgh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggh",
  })
  @post("{id}")
  static createGgh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
