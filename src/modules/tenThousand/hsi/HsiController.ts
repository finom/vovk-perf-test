import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsi")
export default class HsiController {
  @operation({
    summary: "Get Hsi",
  })
  @get()
  static getHsi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hsi",
  })
  @post("{id}")
  static createHsi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
