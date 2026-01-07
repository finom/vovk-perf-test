import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crz")
export default class CrzController {
  @operation({
    summary: "Get Crz",
  })
  @get()
  static getCrz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Crz",
  })
  @post("{id}")
  static createCrz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
