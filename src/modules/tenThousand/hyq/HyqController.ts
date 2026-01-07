import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyq")
export default class HyqController {
  @operation({
    summary: "Get Hyq",
  })
  @get()
  static getHyq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hyq",
  })
  @post("{id}")
  static createHyq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
