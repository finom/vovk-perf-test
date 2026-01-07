import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blz")
export default class BlzController {
  @operation({
    summary: "Get Blz",
  })
  @get()
  static getBlz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Blz",
  })
  @post("{id}")
  static createBlz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
