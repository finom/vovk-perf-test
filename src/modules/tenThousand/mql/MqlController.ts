import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mql")
export default class MqlController {
  @operation({
    summary: "Get Mql",
  })
  @get()
  static getMql = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mql",
  })
  @post("{id}")
  static createMql = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
