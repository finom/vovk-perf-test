import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hay")
export default class HayController {
  @operation({
    summary: "Get Hay",
  })
  @get()
  static getHay = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hay",
  })
  @post("{id}")
  static createHay = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
