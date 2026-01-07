import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzq")
export default class MzqController {
  @operation({
    summary: "Get Mzq",
  })
  @get()
  static getMzq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzq",
  })
  @post("{id}")
  static createMzq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
