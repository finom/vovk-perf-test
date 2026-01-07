import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvz")
export default class HvzController {
  @operation({
    summary: "Get Hvz",
  })
  @get()
  static getHvz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hvz",
  })
  @post("{id}")
  static createHvz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
