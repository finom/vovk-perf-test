import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzz")
export default class MzzController {
  @operation({
    summary: "Get Mzz",
  })
  @get()
  static getMzz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzz",
  })
  @post("{id}")
  static createMzz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
