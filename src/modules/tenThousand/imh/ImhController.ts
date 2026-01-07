import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imh")
export default class ImhController {
  @operation({
    summary: "Get Imh",
  })
  @get()
  static getImh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Imh",
  })
  @post("{id}")
  static createImh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
