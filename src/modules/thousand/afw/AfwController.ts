import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afw")
export default class AfwController {
  @operation({
    summary: "Get Afw",
  })
  @get()
  static getAfw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Afw",
  })
  @post("{id}")
  static createAfw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
