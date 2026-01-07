import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfr")
export default class HfrController {
  @operation({
    summary: "Get Hfr",
  })
  @get()
  static getHfr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hfr",
  })
  @post("{id}")
  static createHfr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
