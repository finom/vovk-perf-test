import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmu")
export default class GmuController {
  @operation({
    summary: "Get Gmu",
  })
  @get()
  static getGmu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gmu",
  })
  @post("{id}")
  static createGmu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
