import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dko")
export default class DkoController {
  @operation({
    summary: "Get Dko",
  })
  @get()
  static getDko = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dko",
  })
  @post("{id}")
  static createDko = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
