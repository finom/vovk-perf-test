import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhw")
export default class MhwController {
  @operation({
    summary: "Get Mhw",
  })
  @get()
  static getMhw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mhw",
  })
  @post("{id}")
  static createMhw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
