import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifb")
export default class IfbController {
  @operation({
    summary: "Get Ifb",
  })
  @get()
  static getIfb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ifb",
  })
  @post("{id}")
  static createIfb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
