import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kru")
export default class KruController {
  @operation({
    summary: "Get Kru",
  })
  @get()
  static getKru = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kru",
  })
  @post("{id}")
  static createKru = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
