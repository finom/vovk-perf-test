import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itl")
export default class ItlController {
  @operation({
    summary: "Get Itl",
  })
  @get()
  static getItl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Itl",
  })
  @post("{id}")
  static createItl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
