import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gby")
export default class GbyController {
  @operation({
    summary: "Get Gby",
  })
  @get()
  static getGby = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gby",
  })
  @post("{id}")
  static createGby = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
