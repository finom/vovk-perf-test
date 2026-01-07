import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itg")
export default class ItgController {
  @operation({
    summary: "Get Itg",
  })
  @get()
  static getItg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Itg",
  })
  @post("{id}")
  static createItg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
