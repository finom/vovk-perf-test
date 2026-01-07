import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpu")
export default class LpuController {
  @operation({
    summary: "Get Lpu",
  })
  @get()
  static getLpu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lpu",
  })
  @post("{id}")
  static createLpu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
