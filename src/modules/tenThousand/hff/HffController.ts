import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hff")
export default class HffController {
  @operation({
    summary: "Get Hff",
  })
  @get()
  static getHff = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hff",
  })
  @post("{id}")
  static createHff = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
