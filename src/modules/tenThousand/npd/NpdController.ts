import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npd")
export default class NpdController {
  @operation({
    summary: "Get Npd",
  })
  @get()
  static getNpd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Npd",
  })
  @post("{id}")
  static createNpd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
