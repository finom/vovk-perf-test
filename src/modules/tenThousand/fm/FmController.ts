import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fm")
export default class FmController {
  @operation({
    summary: "Get Fm",
  })
  @get()
  static getFm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fm",
  })
  @post("{id}")
  static createFm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
