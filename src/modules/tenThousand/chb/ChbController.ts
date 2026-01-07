import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chb")
export default class ChbController {
  @operation({
    summary: "Get Chb",
  })
  @get()
  static getChb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Chb",
  })
  @post("{id}")
  static createChb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
