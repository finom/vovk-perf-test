import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhb")
export default class HhbController {
  @operation({
    summary: "Get Hhb",
  })
  @get()
  static getHhb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hhb",
  })
  @post("{id}")
  static createHhb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
