import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drb")
export default class DrbController {
  @operation({
    summary: "Get Drb",
  })
  @get()
  static getDrb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Drb",
  })
  @post("{id}")
  static createDrb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
