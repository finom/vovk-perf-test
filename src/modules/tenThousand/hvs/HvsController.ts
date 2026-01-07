import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvs")
export default class HvsController {
  @operation({
    summary: "Get Hvs",
  })
  @get()
  static getHvs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hvs",
  })
  @post("{id}")
  static createHvs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
