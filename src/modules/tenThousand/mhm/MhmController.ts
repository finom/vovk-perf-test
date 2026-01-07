import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhm")
export default class MhmController {
  @operation({
    summary: "Get Mhm",
  })
  @get()
  static getMhm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mhm",
  })
  @post("{id}")
  static createMhm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
