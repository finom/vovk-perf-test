import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzd")
export default class MzdController {
  @operation({
    summary: "Get Mzd",
  })
  @get()
  static getMzd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzd",
  })
  @post("{id}")
  static createMzd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
