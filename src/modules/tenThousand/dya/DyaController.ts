import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dya")
export default class DyaController {
  @operation({
    summary: "Get Dya",
  })
  @get()
  static getDya = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dya",
  })
  @post("{id}")
  static createDya = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
