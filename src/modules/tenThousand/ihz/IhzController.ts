import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihz")
export default class IhzController {
  @operation({
    summary: "Get Ihz",
  })
  @get()
  static getIhz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ihz",
  })
  @post("{id}")
  static createIhz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
