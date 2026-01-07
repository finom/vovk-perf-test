import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czx")
export default class CzxController {
  @operation({
    summary: "Get Czx",
  })
  @get()
  static getCzx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Czx",
  })
  @post("{id}")
  static createCzx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
