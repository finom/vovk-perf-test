import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brz")
export default class BrzController {
  @operation({
    summary: "Get Brz",
  })
  @get()
  static getBrz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Brz",
  })
  @post("{id}")
  static createBrz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
