import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lea")
export default class LeaController {
  @operation({
    summary: "Get Lea",
  })
  @get()
  static getLea = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lea",
  })
  @post("{id}")
  static createLea = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
