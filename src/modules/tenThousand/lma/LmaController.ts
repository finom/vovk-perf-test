import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lma")
export default class LmaController {
  @operation({
    summary: "Get Lma",
  })
  @get()
  static getLma = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lma",
  })
  @post("{id}")
  static createLma = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
