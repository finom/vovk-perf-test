import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hva")
export default class HvaController {
  @operation({
    summary: "Get Hva",
  })
  @get()
  static getHva = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hva",
  })
  @post("{id}")
  static createHva = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
