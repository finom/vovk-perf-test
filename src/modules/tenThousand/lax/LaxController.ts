import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lax")
export default class LaxController {
  @operation({
    summary: "Get Lax",
  })
  @get()
  static getLax = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lax",
  })
  @post("{id}")
  static createLax = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
