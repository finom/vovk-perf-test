import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdt")
export default class MdtController {
  @operation({
    summary: "Get Mdt",
  })
  @get()
  static getMdt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mdt",
  })
  @post("{id}")
  static createMdt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
