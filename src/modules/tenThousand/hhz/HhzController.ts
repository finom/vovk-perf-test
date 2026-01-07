import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhz")
export default class HhzController {
  @operation({
    summary: "Get Hhz",
  })
  @get()
  static getHhz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hhz",
  })
  @post("{id}")
  static createHhz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
