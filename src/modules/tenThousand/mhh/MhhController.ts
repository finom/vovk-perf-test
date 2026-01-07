import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhh")
export default class MhhController {
  @operation({
    summary: "Get Mhh",
  })
  @get()
  static getMhh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mhh",
  })
  @post("{id}")
  static createMhh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
