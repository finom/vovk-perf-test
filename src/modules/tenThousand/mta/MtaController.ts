import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mta")
export default class MtaController {
  @operation({
    summary: "Get Mta",
  })
  @get()
  static getMta = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mta",
  })
  @post("{id}")
  static createMta = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
