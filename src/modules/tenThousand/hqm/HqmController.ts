import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqm")
export default class HqmController {
  @operation({
    summary: "Get Hqm",
  })
  @get()
  static getHqm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqm",
  })
  @post("{id}")
  static createHqm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
