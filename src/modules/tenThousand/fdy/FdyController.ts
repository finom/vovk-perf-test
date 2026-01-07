import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdy")
export default class FdyController {
  @operation({
    summary: "Get Fdy",
  })
  @get()
  static getFdy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fdy",
  })
  @post("{id}")
  static createFdy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
