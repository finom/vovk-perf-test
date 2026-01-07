import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aoa")
export default class AoaController {
  @operation({
    summary: "Get Aoa",
  })
  @get()
  static getAoa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aoa",
  })
  @post("{id}")
  static createAoa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
