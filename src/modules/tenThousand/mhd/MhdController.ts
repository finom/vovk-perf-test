import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhd")
export default class MhdController {
  @operation({
    summary: "Get Mhd",
  })
  @get()
  static getMhd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mhd",
  })
  @post("{id}")
  static createMhd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
