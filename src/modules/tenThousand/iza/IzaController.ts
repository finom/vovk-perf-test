import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iza")
export default class IzaController {
  @operation({
    summary: "Get Iza",
  })
  @get()
  static getIza = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iza",
  })
  @post("{id}")
  static createIza = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
