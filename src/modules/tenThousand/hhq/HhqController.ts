import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhq")
export default class HhqController {
  @operation({
    summary: "Get Hhq",
  })
  @get()
  static getHhq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hhq",
  })
  @post("{id}")
  static createHhq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
