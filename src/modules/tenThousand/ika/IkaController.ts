import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ika")
export default class IkaController {
  @operation({
    summary: "Get Ika",
  })
  @get()
  static getIka = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ika",
  })
  @post("{id}")
  static createIka = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
