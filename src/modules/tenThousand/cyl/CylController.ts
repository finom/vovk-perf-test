import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyl")
export default class CylController {
  @operation({
    summary: "Get Cyl",
  })
  @get()
  static getCyl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cyl",
  })
  @post("{id}")
  static createCyl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
