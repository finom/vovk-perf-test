import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lya")
export default class LyaController {
  @operation({
    summary: "Get Lya",
  })
  @get()
  static getLya = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lya",
  })
  @post("{id}")
  static createLya = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
