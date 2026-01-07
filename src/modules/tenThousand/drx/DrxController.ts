import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drx")
export default class DrxController {
  @operation({
    summary: "Get Drx",
  })
  @get()
  static getDrx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Drx",
  })
  @post("{id}")
  static createDrx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
