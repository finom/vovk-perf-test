import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyo")
export default class FyoController {
  @operation({
    summary: "Get Fyo",
  })
  @get()
  static getFyo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fyo",
  })
  @post("{id}")
  static createFyo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
