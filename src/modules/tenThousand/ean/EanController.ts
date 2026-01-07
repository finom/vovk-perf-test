import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ean")
export default class EanController {
  @operation({
    summary: "Get Ean",
  })
  @get()
  static getEan = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ean",
  })
  @post("{id}")
  static createEan = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
