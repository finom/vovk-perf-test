import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgg")
export default class DggController {
  @operation({
    summary: "Get Dgg",
  })
  @get()
  static getDgg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dgg",
  })
  @post("{id}")
  static createDgg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
