import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekp")
export default class EkpController {
  @operation({
    summary: "Get Ekp",
  })
  @get()
  static getEkp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ekp",
  })
  @post("{id}")
  static createEkp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
