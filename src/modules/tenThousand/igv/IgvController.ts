import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igv")
export default class IgvController {
  @operation({
    summary: "Get Igv",
  })
  @get()
  static getIgv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Igv",
  })
  @post("{id}")
  static createIgv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
