import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsb")
export default class GsbController {
  @operation({
    summary: "Get Gsb",
  })
  @get()
  static getGsb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gsb",
  })
  @post("{id}")
  static createGsb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
