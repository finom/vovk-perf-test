import { procedure, prefix, get, post, operation } from "vovk";

@prefix("doa")
export default class DoaController {
  @operation({
    summary: "Get Doa",
  })
  @get()
  static getDoa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Doa",
  })
  @post("{id}")
  static createDoa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
