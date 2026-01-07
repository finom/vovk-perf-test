import { procedure, prefix, get, post, operation } from "vovk";

@prefix("foq")
export default class FoqController {
  @operation({
    summary: "Get Foq",
  })
  @get()
  static getFoq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Foq",
  })
  @post("{id}")
  static createFoq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
