import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gip")
export default class GipController {
  @operation({
    summary: "Get Gip",
  })
  @get()
  static getGip = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gip",
  })
  @post("{id}")
  static createGip = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
