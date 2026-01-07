import { procedure, prefix, get, post, operation } from "vovk";

@prefix("diw")
export default class DiwController {
  @operation({
    summary: "Get Diw",
  })
  @get()
  static getDiw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Diw",
  })
  @post("{id}")
  static createDiw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
