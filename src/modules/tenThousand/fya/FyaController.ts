import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fya")
export default class FyaController {
  @operation({
    summary: "Get Fya",
  })
  @get()
  static getFya = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fya",
  })
  @post("{id}")
  static createFya = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
