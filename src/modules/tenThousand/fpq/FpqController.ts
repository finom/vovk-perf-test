import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpq")
export default class FpqController {
  @operation({
    summary: "Get Fpq",
  })
  @get()
  static getFpq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpq",
  })
  @post("{id}")
  static createFpq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
