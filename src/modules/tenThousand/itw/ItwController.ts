import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itw")
export default class ItwController {
  @operation({
    summary: "Get Itw",
  })
  @get()
  static getItw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Itw",
  })
  @post("{id}")
  static createItw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
