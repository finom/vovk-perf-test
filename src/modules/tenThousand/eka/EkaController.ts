import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eka")
export default class EkaController {
  @operation({
    summary: "Get Eka",
  })
  @get()
  static getEka = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eka",
  })
  @post("{id}")
  static createEka = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
