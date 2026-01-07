import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtd")
export default class MtdController {
  @operation({
    summary: "Get Mtd",
  })
  @get()
  static getMtd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mtd",
  })
  @post("{id}")
  static createMtd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
