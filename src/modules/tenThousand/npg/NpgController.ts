import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npg")
export default class NpgController {
  @operation({
    summary: "Get Npg",
  })
  @get()
  static getNpg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Npg",
  })
  @post("{id}")
  static createNpg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
