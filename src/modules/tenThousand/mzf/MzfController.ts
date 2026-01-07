import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzf")
export default class MzfController {
  @operation({
    summary: "Get Mzf",
  })
  @get()
  static getMzf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzf",
  })
  @post("{id}")
  static createMzf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
