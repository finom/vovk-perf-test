import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgv")
export default class KgvController {
  @operation({
    summary: "Get Kgv",
  })
  @get()
  static getKgv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kgv",
  })
  @post("{id}")
  static createKgv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
