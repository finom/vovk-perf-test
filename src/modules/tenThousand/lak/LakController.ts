import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lak")
export default class LakController {
  @operation({
    summary: "Get Lak",
  })
  @get()
  static getLak = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lak",
  })
  @post("{id}")
  static createLak = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
