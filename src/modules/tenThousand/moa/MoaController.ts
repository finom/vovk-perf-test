import { procedure, prefix, get, post, operation } from "vovk";

@prefix("moa")
export default class MoaController {
  @operation({
    summary: "Get Moa",
  })
  @get()
  static getMoa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Moa",
  })
  @post("{id}")
  static createMoa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
