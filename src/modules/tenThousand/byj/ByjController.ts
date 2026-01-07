import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byj")
export default class ByjController {
  @operation({
    summary: "Get Byj",
  })
  @get()
  static getByj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Byj",
  })
  @post("{id}")
  static createByj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
