import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekj")
export default class EkjController {
  @operation({
    summary: "Get Ekj",
  })
  @get()
  static getEkj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ekj",
  })
  @post("{id}")
  static createEkj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
