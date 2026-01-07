import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpr")
export default class MprController {
  @operation({
    summary: "Get Mpr",
  })
  @get()
  static getMpr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpr",
  })
  @post("{id}")
  static createMpr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
