import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhw")
export default class HhwController {
  @operation({
    summary: "Get Hhw",
  })
  @get()
  static getHhw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hhw",
  })
  @post("{id}")
  static createHhw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
