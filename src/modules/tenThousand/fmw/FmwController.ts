import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmw")
export default class FmwController {
  @operation({
    summary: "Get Fmw",
  })
  @get()
  static getFmw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fmw",
  })
  @post("{id}")
  static createFmw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
