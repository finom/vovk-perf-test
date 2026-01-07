import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwy")
export default class LwyController {
  @operation({
    summary: "Get Lwy",
  })
  @get()
  static getLwy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lwy",
  })
  @post("{id}")
  static createLwy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
