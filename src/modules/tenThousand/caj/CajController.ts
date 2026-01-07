import { procedure, prefix, get, post, operation } from "vovk";

@prefix("caj")
export default class CajController {
  @operation({
    summary: "Get Caj",
  })
  @get()
  static getCaj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Caj",
  })
  @post("{id}")
  static createCaj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
