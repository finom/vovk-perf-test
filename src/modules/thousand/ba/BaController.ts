import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ba")
export default class BaController {
  @operation({
    summary: "Get Ba",
  })
  @get()
  static getBa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ba",
  })
  @post("{id}")
  static createBa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
