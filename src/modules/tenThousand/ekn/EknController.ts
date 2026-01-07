import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekn")
export default class EknController {
  @operation({
    summary: "Get Ekn",
  })
  @get()
  static getEkn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ekn",
  })
  @post("{id}")
  static createEkn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
