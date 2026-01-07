import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kni")
export default class KniController {
  @operation({
    summary: "Get Kni",
  })
  @get()
  static getKni = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kni",
  })
  @post("{id}")
  static createKni = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
