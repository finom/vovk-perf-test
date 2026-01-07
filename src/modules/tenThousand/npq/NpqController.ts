import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npq")
export default class NpqController {
  @operation({
    summary: "Get Npq",
  })
  @get()
  static getNpq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Npq",
  })
  @post("{id}")
  static createNpq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
