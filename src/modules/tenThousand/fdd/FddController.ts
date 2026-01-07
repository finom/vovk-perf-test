import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdd")
export default class FddController {
  @operation({
    summary: "Get Fdd",
  })
  @get()
  static getFdd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fdd",
  })
  @post("{id}")
  static createFdd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
