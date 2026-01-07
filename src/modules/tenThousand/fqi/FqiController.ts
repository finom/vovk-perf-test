import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqi")
export default class FqiController {
  @operation({
    summary: "Get Fqi",
  })
  @get()
  static getFqi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fqi",
  })
  @post("{id}")
  static createFqi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
