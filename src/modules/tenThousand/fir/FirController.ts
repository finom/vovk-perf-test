import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fir")
export default class FirController {
  @operation({
    summary: "Get Fir",
  })
  @get()
  static getFir = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fir",
  })
  @post("{id}")
  static createFir = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
