import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kds")
export default class KdsController {
  @operation({
    summary: "Get Kds",
  })
  @get()
  static getKds = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kds",
  })
  @post("{id}")
  static createKds = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
