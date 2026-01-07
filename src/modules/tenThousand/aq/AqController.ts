import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aq")
export default class AqController {
  @operation({
    summary: "Get Aq",
  })
  @get()
  static getAq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aq",
  })
  @post("{id}")
  static createAq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
