import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmz")
export default class FmzController {
  @operation({
    summary: "Get Fmz",
  })
  @get()
  static getFmz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fmz",
  })
  @post("{id}")
  static createFmz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
