import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dws")
export default class DwsController {
  @operation({
    summary: "Get Dws",
  })
  @get()
  static getDws = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dws",
  })
  @post("{id}")
  static createDws = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
