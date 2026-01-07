import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fof")
export default class FofController {
  @operation({
    summary: "Get Fof",
  })
  @get()
  static getFof = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fof",
  })
  @post("{id}")
  static createFof = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
