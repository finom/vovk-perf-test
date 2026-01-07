import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grb")
export default class GrbController {
  @operation({
    summary: "Get Grb",
  })
  @get()
  static getGrb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Grb",
  })
  @post("{id}")
  static createGrb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
