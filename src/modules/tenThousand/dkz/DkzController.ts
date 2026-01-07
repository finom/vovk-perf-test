import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkz")
export default class DkzController {
  @operation({
    summary: "Get Dkz",
  })
  @get()
  static getDkz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dkz",
  })
  @post("{id}")
  static createDkz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
