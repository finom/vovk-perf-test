import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cof")
export default class CofController {
  @operation({
    summary: "Get Cof",
  })
  @get()
  static getCof = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cof",
  })
  @post("{id}")
  static createCof = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
