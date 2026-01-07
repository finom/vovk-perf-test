import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kha")
export default class KhaController {
  @operation({
    summary: "Get Kha",
  })
  @get()
  static getKha = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kha",
  })
  @post("{id}")
  static createKha = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
