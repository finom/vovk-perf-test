import { procedure, prefix, get, post, operation } from "vovk";

@prefix("foy")
export default class FoyController {
  @operation({
    summary: "Get Foy",
  })
  @get()
  static getFoy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Foy",
  })
  @post("{id}")
  static createFoy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
