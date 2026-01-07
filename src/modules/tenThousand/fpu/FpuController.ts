import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpu")
export default class FpuController {
  @operation({
    summary: "Get Fpu",
  })
  @get()
  static getFpu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpu",
  })
  @post("{id}")
  static createFpu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
