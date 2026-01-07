import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mma")
export default class MmaController {
  @operation({
    summary: "Get Mma",
  })
  @get()
  static getMma = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mma",
  })
  @post("{id}")
  static createMma = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
