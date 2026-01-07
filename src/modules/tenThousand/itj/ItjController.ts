import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itj")
export default class ItjController {
  @operation({
    summary: "Get Itj",
  })
  @get()
  static getItj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Itj",
  })
  @post("{id}")
  static createItj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
