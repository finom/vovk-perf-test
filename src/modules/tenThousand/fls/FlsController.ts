import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fls")
export default class FlsController {
  @operation({
    summary: "Get Fls",
  })
  @get()
  static getFls = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fls",
  })
  @post("{id}")
  static createFls = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
