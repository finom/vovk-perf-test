import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsi")
export default class BsiController {
  @operation({
    summary: "Get Bsi",
  })
  @get()
  static getBsi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bsi",
  })
  @post("{id}")
  static createBsi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
