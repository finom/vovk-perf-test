import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hco")
export default class HcoController {
  @operation({
    summary: "Get Hco",
  })
  @get()
  static getHco = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hco",
  })
  @post("{id}")
  static createHco = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
