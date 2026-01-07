import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsp")
export default class BspController {
  @operation({
    summary: "Get Bsp",
  })
  @get()
  static getBsp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bsp",
  })
  @post("{id}")
  static createBsp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
