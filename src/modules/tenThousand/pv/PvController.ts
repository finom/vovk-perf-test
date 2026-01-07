import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pv")
export default class PvController {
  @operation({
    summary: "Get Pv",
  })
  @get()
  static getPv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Pv",
  })
  @post("{id}")
  static createPv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
