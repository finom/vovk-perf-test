import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cma")
export default class CmaController {
  @operation({
    summary: "Get Cma",
  })
  @get()
  static getCma = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cma",
  })
  @post("{id}")
  static createCma = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
