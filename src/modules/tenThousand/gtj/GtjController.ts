import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtj")
export default class GtjController {
  @operation({
    summary: "Get Gtj",
  })
  @get()
  static getGtj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gtj",
  })
  @post("{id}")
  static createGtj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
