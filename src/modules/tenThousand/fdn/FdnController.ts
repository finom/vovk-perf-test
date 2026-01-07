import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdn")
export default class FdnController {
  @operation({
    summary: "Get Fdn",
  })
  @get()
  static getFdn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fdn",
  })
  @post("{id}")
  static createFdn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
