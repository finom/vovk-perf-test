import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nco")
export default class NcoController {
  @operation({
    summary: "Get Nco",
  })
  @get()
  static getNco = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nco",
  })
  @post("{id}")
  static createNco = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
