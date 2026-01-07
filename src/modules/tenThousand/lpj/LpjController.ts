import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpj")
export default class LpjController {
  @operation({
    summary: "Get Lpj",
  })
  @get()
  static getLpj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lpj",
  })
  @post("{id}")
  static createLpj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
