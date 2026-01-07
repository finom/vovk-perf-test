import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hap")
export default class HapController {
  @operation({
    summary: "Get Hap",
  })
  @get()
  static getHap = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hap",
  })
  @post("{id}")
  static createHap = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
