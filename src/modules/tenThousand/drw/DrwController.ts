import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drw")
export default class DrwController {
  @operation({
    summary: "Get Drw",
  })
  @get()
  static getDrw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Drw",
  })
  @post("{id}")
  static createDrw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
