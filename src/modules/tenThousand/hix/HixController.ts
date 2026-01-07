import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hix")
export default class HixController {
  @operation({
    summary: "Get Hix",
  })
  @get()
  static getHix = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hix",
  })
  @post("{id}")
  static createHix = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
