import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsu")
export default class BsuController {
  @operation({
    summary: "Get Bsu",
  })
  @get()
  static getBsu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bsu",
  })
  @post("{id}")
  static createBsu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
