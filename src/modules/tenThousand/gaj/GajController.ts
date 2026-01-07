import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gaj")
export default class GajController {
  @operation({
    summary: "Get Gaj",
  })
  @get()
  static getGaj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gaj",
  })
  @post("{id}")
  static createGaj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
