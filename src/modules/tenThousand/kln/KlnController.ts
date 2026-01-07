import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kln")
export default class KlnController {
  @operation({
    summary: "Get Kln",
  })
  @get()
  static getKln = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kln",
  })
  @post("{id}")
  static createKln = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
