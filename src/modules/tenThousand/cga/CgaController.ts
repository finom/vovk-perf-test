import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cga")
export default class CgaController {
  @operation({
    summary: "Get Cga",
  })
  @get()
  static getCga = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cga",
  })
  @post("{id}")
  static createCga = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
