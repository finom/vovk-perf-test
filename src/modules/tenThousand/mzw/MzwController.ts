import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzw")
export default class MzwController {
  @operation({
    summary: "Get Mzw",
  })
  @get()
  static getMzw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzw",
  })
  @post("{id}")
  static createMzw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
