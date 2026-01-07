import { procedure, prefix, get, post, operation } from "vovk";

@prefix("goc")
export default class GocController {
  @operation({
    summary: "Get Goc",
  })
  @get()
  static getGoc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Goc",
  })
  @post("{id}")
  static createGoc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
