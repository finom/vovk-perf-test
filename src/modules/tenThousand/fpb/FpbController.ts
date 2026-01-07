import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpb")
export default class FpbController {
  @operation({
    summary: "Get Fpb",
  })
  @get()
  static getFpb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpb",
  })
  @post("{id}")
  static createFpb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
