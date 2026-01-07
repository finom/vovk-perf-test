import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kka")
export default class KkaController {
  @operation({
    summary: "Get Kka",
  })
  @get()
  static getKka = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kka",
  })
  @post("{id}")
  static createKka = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
