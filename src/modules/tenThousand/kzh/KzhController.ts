import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzh")
export default class KzhController {
  @operation({
    summary: "Get Kzh",
  })
  @get()
  static getKzh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kzh",
  })
  @post("{id}")
  static createKzh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
