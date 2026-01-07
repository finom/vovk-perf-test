import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hq")
export default class HqController {
  @operation({
    summary: "Get Hq",
  })
  @get()
  static getHq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hq",
  })
  @post("{id}")
  static createHq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
