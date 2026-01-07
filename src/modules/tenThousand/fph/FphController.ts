import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fph")
export default class FphController {
  @operation({
    summary: "Get Fph",
  })
  @get()
  static getFph = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fph",
  })
  @post("{id}")
  static createFph = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
