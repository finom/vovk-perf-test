import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbc")
export default class HbcController {
  @operation({
    summary: "Get Hbc",
  })
  @get()
  static getHbc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hbc",
  })
  @post("{id}")
  static createHbc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
