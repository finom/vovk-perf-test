import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmr")
export default class NmrController {
  @operation({
    summary: "Get Nmr",
  })
  @get()
  static getNmr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nmr",
  })
  @post("{id}")
  static createNmr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
