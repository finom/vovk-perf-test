import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgm")
export default class KgmController {
  @operation({
    summary: "Get Kgm",
  })
  @get()
  static getKgm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kgm",
  })
  @post("{id}")
  static createKgm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
