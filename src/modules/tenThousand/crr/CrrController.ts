import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crr")
export default class CrrController {
  @operation({
    summary: "Get Crr",
  })
  @get()
  static getCrr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Crr",
  })
  @post("{id}")
  static createCrr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
