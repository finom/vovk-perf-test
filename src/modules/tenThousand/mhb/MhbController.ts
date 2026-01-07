import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhb")
export default class MhbController {
  @operation({
    summary: "Get Mhb",
  })
  @get()
  static getMhb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mhb",
  })
  @post("{id}")
  static createMhb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
