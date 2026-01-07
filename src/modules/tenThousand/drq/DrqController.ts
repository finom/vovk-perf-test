import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drq")
export default class DrqController {
  @operation({
    summary: "Get Drq",
  })
  @get()
  static getDrq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Drq",
  })
  @post("{id}")
  static createDrq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
