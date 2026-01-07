import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mz")
export default class MzController {
  @operation({
    summary: "Get Mz",
  })
  @get()
  static getMz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mz",
  })
  @post("{id}")
  static createMz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
