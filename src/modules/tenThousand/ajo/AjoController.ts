import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajo")
export default class AjoController {
  @operation({
    summary: "Get Ajo",
  })
  @get()
  static getAjo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ajo",
  })
  @post("{id}")
  static createAjo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
