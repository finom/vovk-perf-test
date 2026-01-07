import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpx")
export default class FpxController {
  @operation({
    summary: "Get Fpx",
  })
  @get()
  static getFpx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpx",
  })
  @post("{id}")
  static createFpx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
