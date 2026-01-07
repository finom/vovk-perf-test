import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffl")
export default class FflController {
  @operation({
    summary: "Get Ffl",
  })
  @get()
  static getFfl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ffl",
  })
  @post("{id}")
  static createFfl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
