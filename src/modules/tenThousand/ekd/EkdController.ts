import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekd")
export default class EkdController {
  @operation({
    summary: "Get Ekd",
  })
  @get()
  static getEkd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ekd",
  })
  @post("{id}")
  static createEkd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
