import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ciw")
export default class CiwController {
  @operation({
    summary: "Get Ciw",
  })
  @get()
  static getCiw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ciw",
  })
  @post("{id}")
  static createCiw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
