import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kns")
export default class KnsController {
  @operation({
    summary: "Get Kns",
  })
  @get()
  static getKns = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kns",
  })
  @post("{id}")
  static createKns = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
