import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvh")
export default class MvhController {
  @operation({
    summary: "Get Mvh",
  })
  @get()
  static getMvh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mvh",
  })
  @post("{id}")
  static createMvh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
