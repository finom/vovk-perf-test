import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzp")
export default class MzpController {
  @operation({
    summary: "Get Mzp",
  })
  @get()
  static getMzp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzp",
  })
  @post("{id}")
  static createMzp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
