import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gal")
export default class GalController {
  @operation({
    summary: "Get Gal",
  })
  @get()
  static getGal = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gal",
  })
  @post("{id}")
  static createGal = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
