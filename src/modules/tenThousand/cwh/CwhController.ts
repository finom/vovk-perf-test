import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwh")
export default class CwhController {
  @operation({
    summary: "Get Cwh",
  })
  @get()
  static getCwh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cwh",
  })
  @post("{id}")
  static createCwh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
