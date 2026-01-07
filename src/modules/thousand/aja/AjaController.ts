import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aja")
export default class AjaController {
  @operation({
    summary: "Get Aja",
  })
  @get()
  static getAja = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aja",
  })
  @post("{id}")
  static createAja = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
