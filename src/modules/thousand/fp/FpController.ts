import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fp")
export default class FpController {
  @operation({
    summary: "Get Fp",
  })
  @get()
  static getFp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fp",
  })
  @post("{id}")
  static createFp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
