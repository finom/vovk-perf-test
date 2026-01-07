import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kol")
export default class KolController {
  @operation({
    summary: "Get Kol",
  })
  @get()
  static getKol = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kol",
  })
  @post("{id}")
  static createKol = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
