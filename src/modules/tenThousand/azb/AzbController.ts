import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azb")
export default class AzbController {
  @operation({
    summary: "Get Azb",
  })
  @get()
  static getAzb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azb",
  })
  @post("{id}")
  static createAzb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
