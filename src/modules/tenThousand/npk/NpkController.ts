import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npk")
export default class NpkController {
  @operation({
    summary: "Get Npk",
  })
  @get()
  static getNpk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Npk",
  })
  @post("{id}")
  static createNpk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
