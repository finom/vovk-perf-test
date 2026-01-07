import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmr")
export default class DmrController {
  @operation({
    summary: "Get Dmr",
  })
  @get()
  static getDmr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dmr",
  })
  @post("{id}")
  static createDmr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
