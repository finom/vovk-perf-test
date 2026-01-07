import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bz")
export default class BzController {
  @operation({
    summary: "Get Bz",
  })
  @get()
  static getBz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bz",
  })
  @post("{id}")
  static createBz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
