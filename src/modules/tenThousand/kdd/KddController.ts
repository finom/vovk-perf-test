import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdd")
export default class KddController {
  @operation({
    summary: "Get Kdd",
  })
  @get()
  static getKdd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kdd",
  })
  @post("{id}")
  static createKdd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
