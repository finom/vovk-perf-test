import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amg")
export default class AmgController {
  @operation({
    summary: "Get Amg",
  })
  @get()
  static getAmg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Amg",
  })
  @post("{id}")
  static createAmg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
