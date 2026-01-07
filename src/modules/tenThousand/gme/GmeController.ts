import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gme")
export default class GmeController {
  @operation({
    summary: "Get Gme",
  })
  @get()
  static getGme = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gme",
  })
  @post("{id}")
  static createGme = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
