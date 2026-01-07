import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grr")
export default class GrrController {
  @operation({
    summary: "Get Grr",
  })
  @get()
  static getGrr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Grr",
  })
  @post("{id}")
  static createGrr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
