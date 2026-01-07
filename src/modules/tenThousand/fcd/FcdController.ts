import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcd")
export default class FcdController {
  @operation({
    summary: "Get Fcd",
  })
  @get()
  static getFcd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fcd",
  })
  @post("{id}")
  static createFcd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
