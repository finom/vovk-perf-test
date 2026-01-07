import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npv")
export default class NpvController {
  @operation({
    summary: "Get Npv",
  })
  @get()
  static getNpv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Npv",
  })
  @post("{id}")
  static createNpv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
