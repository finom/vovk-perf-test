import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bru")
export default class BruController {
  @operation({
    summary: "Get Bru",
  })
  @get()
  static getBru = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bru",
  })
  @post("{id}")
  static createBru = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
