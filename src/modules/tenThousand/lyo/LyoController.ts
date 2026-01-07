import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyo")
export default class LyoController {
  @operation({
    summary: "Get Lyo",
  })
  @get()
  static getLyo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lyo",
  })
  @post("{id}")
  static createLyo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
