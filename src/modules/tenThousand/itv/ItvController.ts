import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itv")
export default class ItvController {
  @operation({
    summary: "Get Itv",
  })
  @get()
  static getItv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Itv",
  })
  @post("{id}")
  static createItv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
