import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fat")
export default class FatController {
  @operation({
    summary: "Get Fat",
  })
  @get()
  static getFat = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fat",
  })
  @post("{id}")
  static createFat = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
