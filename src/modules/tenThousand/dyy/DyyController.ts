import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyy")
export default class DyyController {
  @operation({
    summary: "Get Dyy",
  })
  @get()
  static getDyy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dyy",
  })
  @post("{id}")
  static createDyy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
