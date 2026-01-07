import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbl")
export default class MblController {
  @operation({
    summary: "Get Mbl",
  })
  @get()
  static getMbl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbl",
  })
  @post("{id}")
  static createMbl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
