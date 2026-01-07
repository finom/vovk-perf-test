import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdl")
export default class FdlController {
  @operation({
    summary: "Get Fdl",
  })
  @get()
  static getFdl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fdl",
  })
  @post("{id}")
  static createFdl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
