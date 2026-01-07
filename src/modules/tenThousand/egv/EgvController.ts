import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egv")
export default class EgvController {
  @operation({
    summary: "Get Egv",
  })
  @get()
  static getEgv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Egv",
  })
  @post("{id}")
  static createEgv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
