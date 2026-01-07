import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hke")
export default class HkeController {
  @operation({
    summary: "Get Hke",
  })
  @get()
  static getHke = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hke",
  })
  @post("{id}")
  static createHke = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
