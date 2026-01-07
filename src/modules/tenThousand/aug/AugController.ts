import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aug")
export default class AugController {
  @operation({
    summary: "Get Aug",
  })
  @get()
  static getAug = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aug",
  })
  @post("{id}")
  static createAug = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
