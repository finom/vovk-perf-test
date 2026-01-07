import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npb")
export default class NpbController {
  @operation({
    summary: "Get Npb",
  })
  @get()
  static getNpb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Npb",
  })
  @post("{id}")
  static createNpb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
