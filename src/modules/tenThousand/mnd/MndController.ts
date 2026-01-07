import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnd")
export default class MndController {
  @operation({
    summary: "Get Mnd",
  })
  @get()
  static getMnd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mnd",
  })
  @post("{id}")
  static createMnd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
