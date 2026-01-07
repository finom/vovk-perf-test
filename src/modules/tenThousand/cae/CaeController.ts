import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cae")
export default class CaeController {
  @operation({
    summary: "Get Cae",
  })
  @get()
  static getCae = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cae",
  })
  @post("{id}")
  static createCae = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
