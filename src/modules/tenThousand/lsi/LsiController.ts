import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsi")
export default class LsiController {
  @operation({
    summary: "Get Lsi",
  })
  @get()
  static getLsi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lsi",
  })
  @post("{id}")
  static createLsi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
