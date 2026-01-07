import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drg")
export default class DrgController {
  @operation({
    summary: "Get Drg",
  })
  @get()
  static getDrg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Drg",
  })
  @post("{id}")
  static createDrg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
