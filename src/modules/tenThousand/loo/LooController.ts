import { procedure, prefix, get, post, operation } from "vovk";

@prefix("loo")
export default class LooController {
  @operation({
    summary: "Get Loo",
  })
  @get()
  static getLoo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Loo",
  })
  @post("{id}")
  static createLoo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
