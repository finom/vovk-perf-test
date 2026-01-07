import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfl")
export default class CflController {
  @operation({
    summary: "Get Cfl",
  })
  @get()
  static getCfl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cfl",
  })
  @post("{id}")
  static createCfl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
