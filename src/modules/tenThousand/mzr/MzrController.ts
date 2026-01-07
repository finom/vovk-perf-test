import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzr")
export default class MzrController {
  @operation({
    summary: "Get Mzr",
  })
  @get()
  static getMzr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzr",
  })
  @post("{id}")
  static createMzr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
