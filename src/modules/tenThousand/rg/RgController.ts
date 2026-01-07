import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rg")
export default class RgController {
  @operation({
    summary: "Get Rg",
  })
  @get()
  static getRg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Rg",
  })
  @post("{id}")
  static createRg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
