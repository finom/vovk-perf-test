import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahz")
export default class AhzController {
  @operation({
    summary: "Get Ahz",
  })
  @get()
  static getAhz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ahz",
  })
  @post("{id}")
  static createAhz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
