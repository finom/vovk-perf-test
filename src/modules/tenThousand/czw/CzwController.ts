import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czw")
export default class CzwController {
  @operation({
    summary: "Get Czw",
  })
  @get()
  static getCzw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Czw",
  })
  @post("{id}")
  static createCzw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
