import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpk")
export default class FpkController {
  @operation({
    summary: "Get Fpk",
  })
  @get()
  static getFpk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpk",
  })
  @post("{id}")
  static createFpk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
