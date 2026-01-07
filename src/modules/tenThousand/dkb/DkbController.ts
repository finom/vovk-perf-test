import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkb")
export default class DkbController {
  @operation({
    summary: "Get Dkb",
  })
  @get()
  static getDkb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dkb",
  })
  @post("{id}")
  static createDkb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
