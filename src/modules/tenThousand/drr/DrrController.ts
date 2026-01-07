import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drr")
export default class DrrController {
  @operation({
    summary: "Get Drr",
  })
  @get()
  static getDrr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Drr",
  })
  @post("{id}")
  static createDrr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
