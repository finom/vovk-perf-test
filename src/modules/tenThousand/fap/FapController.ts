import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fap")
export default class FapController {
  @operation({
    summary: "Get Fap",
  })
  @get()
  static getFap = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fap",
  })
  @post("{id}")
  static createFap = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
