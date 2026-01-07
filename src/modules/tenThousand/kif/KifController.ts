import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kif")
export default class KifController {
  @operation({
    summary: "Get Kif",
  })
  @get()
  static getKif = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kif",
  })
  @post("{id}")
  static createKif = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
