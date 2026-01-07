import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kir")
export default class KirController {
  @operation({
    summary: "Get Kir",
  })
  @get()
  static getKir = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kir",
  })
  @post("{id}")
  static createKir = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
