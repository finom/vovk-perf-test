import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddv")
export default class DdvController {
  @operation({
    summary: "Get Ddv",
  })
  @get()
  static getDdv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ddv",
  })
  @post("{id}")
  static createDdv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
