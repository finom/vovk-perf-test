import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knu")
export default class KnuController {
  @operation({
    summary: "Get Knu",
  })
  @get()
  static getKnu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Knu",
  })
  @post("{id}")
  static createKnu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
