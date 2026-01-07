import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jem")
export default class JemController {
  @operation({
    summary: "Get Jem",
  })
  @get()
  static getJem = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jem",
  })
  @post("{id}")
  static createJem = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
