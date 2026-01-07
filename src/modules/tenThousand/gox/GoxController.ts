import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gox")
export default class GoxController {
  @operation({
    summary: "Get Gox",
  })
  @get()
  static getGox = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gox",
  })
  @post("{id}")
  static createGox = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
