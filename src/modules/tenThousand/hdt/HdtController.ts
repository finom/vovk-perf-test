import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdt")
export default class HdtController {
  @operation({
    summary: "Get Hdt",
  })
  @get()
  static getHdt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hdt",
  })
  @post("{id}")
  static createHdt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
