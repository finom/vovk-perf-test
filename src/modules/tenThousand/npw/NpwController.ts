import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npw")
export default class NpwController {
  @operation({
    summary: "Get Npw",
  })
  @get()
  static getNpw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Npw",
  })
  @post("{id}")
  static createNpw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
