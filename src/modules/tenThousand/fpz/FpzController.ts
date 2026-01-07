import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpz")
export default class FpzController {
  @operation({
    summary: "Get Fpz",
  })
  @get()
  static getFpz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpz",
  })
  @post("{id}")
  static createFpz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
