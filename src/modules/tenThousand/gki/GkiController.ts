import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gki")
export default class GkiController {
  @operation({
    summary: "Get Gki",
  })
  @get()
  static getGki = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gki",
  })
  @post("{id}")
  static createGki = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
