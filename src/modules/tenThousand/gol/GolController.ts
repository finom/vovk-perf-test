import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gol")
export default class GolController {
  @operation({
    summary: "Get Gol",
  })
  @get()
  static getGol = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gol",
  })
  @post("{id}")
  static createGol = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
