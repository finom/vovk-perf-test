import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekh")
export default class EkhController {
  @operation({
    summary: "Get Ekh",
  })
  @get()
  static getEkh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ekh",
  })
  @post("{id}")
  static createEkh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
