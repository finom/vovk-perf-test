import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klg")
export default class KlgController {
  @operation({
    summary: "Get Klg",
  })
  @get()
  static getKlg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Klg",
  })
  @post("{id}")
  static createKlg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
