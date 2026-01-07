import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxi")
export default class LxiController {
  @operation({
    summary: "Get Lxi",
  })
  @get()
  static getLxi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxi",
  })
  @post("{id}")
  static createLxi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
