import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bat")
export default class BatController {
  @operation({
    summary: "Get Bat",
  })
  @get()
  static getBat = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bat",
  })
  @post("{id}")
  static createBat = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
