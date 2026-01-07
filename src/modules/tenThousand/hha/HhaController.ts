import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hha")
export default class HhaController {
  @operation({
    summary: "Get Hha",
  })
  @get()
  static getHha = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hha",
  })
  @post("{id}")
  static createHha = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
