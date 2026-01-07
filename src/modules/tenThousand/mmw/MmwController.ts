import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmw")
export default class MmwController {
  @operation({
    summary: "Get Mmw",
  })
  @get()
  static getMmw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mmw",
  })
  @post("{id}")
  static createMmw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
