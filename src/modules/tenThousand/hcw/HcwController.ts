import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcw")
export default class HcwController {
  @operation({
    summary: "Get Hcw",
  })
  @get()
  static getHcw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hcw",
  })
  @post("{id}")
  static createHcw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
