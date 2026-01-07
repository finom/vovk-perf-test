import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfc")
export default class LfcController {
  @operation({
    summary: "Get Lfc",
  })
  @get()
  static getLfc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfc",
  })
  @post("{id}")
  static createLfc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
