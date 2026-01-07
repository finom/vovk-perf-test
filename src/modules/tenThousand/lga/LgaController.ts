import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lga")
export default class LgaController {
  @operation({
    summary: "Get Lga",
  })
  @get()
  static getLga = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lga",
  })
  @post("{id}")
  static createLga = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
