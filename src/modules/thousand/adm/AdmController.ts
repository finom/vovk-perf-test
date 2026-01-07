import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adm")
export default class AdmController {
  @operation({
    summary: "Get Adm",
  })
  @get()
  static getAdm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Adm",
  })
  @post("{id}")
  static createAdm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
